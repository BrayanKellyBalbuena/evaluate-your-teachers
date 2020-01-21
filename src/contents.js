chrome.runtime.onMessage.addListener(message => {
  if (message.rate !== undefined) {
    let calification = parseInt(message.rate);
    $("input[type='number']").each(function() {
      $(this).val(calification);
    });

    let comments = [
      "No muestra dominio de la materia",
      "Inconsistencia en la valoracion de las asignaciones",
      "Mejorar metodologia de trabajo",
      "Buen profesor(a)",
      "Excelente profesor(a) completo dominio del tema, sabe transmitir el conociemiento, 100% recomendado(a)"
    ];

    $("#txtComentario").val(comments[calification - 1]);
  }

  if (message.openAllSurveys !== undefined) {

    let urls = [];
    let surveysUrl = [];
    $("a[href*='/Estudiantes/EvaluarDocente?CM=']").each(function() {
        surveysUrl.push($(this).attr("href"));
    });
   console.log(surveysUrl)

   surveysUrl.forEach(url => {
      window.open(url, "_blank");
    });
  }
});
