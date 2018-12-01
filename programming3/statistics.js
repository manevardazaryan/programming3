var socket = io.connect('http://localhost:4444');
var table = document.getElementById("statistics");

setInterval(function(){
    socket.emit("get statistica", []);
}, 1000);


socket.on("send statistica",function(statistics){
    statistics = JSON.parse(statistics);
    table.innerHTML = "";
    tableHTML = "<tr><td>Ժամանակ</td><td>Գիշատիչ-ուտել</td><td>Խոտ-բազմանալ</td><td>Կերպար1-իրադարձույուն</td><td>խոտակեր-շարժվել</td><td>Կերպար2-փոխանակել</td><td>Կերպար3-մահ</td><td>frameCount</td></tr>";
    for(var s of statistics){
        tableHTML+="<tr>";
        tableHTML+="<td>"+s.timestamp+"</td>";
        tableHTML+="<td>"+s.predatoreat+"</td>";
        tableHTML+="<td>"+s.grassmul+"</td>";
        tableHTML+="<td>"+s.kerpar1event+"</td>";
        tableHTML+="<td>"+s.grasseatermove+"</td>";
        tableHTML+="<td>"+s.kerpar2exchange+"</td>";
        tableHTML+="<td>"+s.kerpar3death+"</td>";
        tableHTML+="<td>"+s.framecount+"</td>";
        tableHTML+="</tr>";
    }

    table.innerHTML = tableHTML;
})
