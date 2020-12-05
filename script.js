$(document).ready(
    function () {

        var words = ["JAVASCRIPT", "FUNCTION", "DOCUMENT", "JQUERY", "VARIABLE", "WARNING", "HANDLER", "PROGRAM", "LOGICAL", "DOCUMENT",
            "PROJECT", "HYPERTEXT", "SUBSCRIPT", "STYLESHEET", "LIBRARY"];
        var selectedIndex = "";
        var selectedWord = "";
        var splitWord = [];
        var dashesArray = [];
        newGame();

        $("button.letter").click(letterSelect)
        $("button.newGame").click(newGame)

        function newGame() {
            selectedWord = "";
            dashesArray = [];
            dashes = "";
            wrongGuesses = 0;
            $("#win, #lose").hide();
            $(".letter").show().removeClass("disabled");
            $("button.newGame").hide();
            $("#galEmp").show();
            $("#galFull").hide();
            $("#galHead").hide();
            $("#galBod").hide();
            $("#galLLeg").hide();
            $("#galRLeg").hide();
            $("#galLArm").hide();
            selectedIndex = Math.floor(Math.random() * words.length)
            selectedWord = words[selectedIndex]
            splitWord = selectedWord.split("")
            for (var i = 0; i < splitWord.length; i++) {
                dashesArray.push("-")
                var dashes = dashesArray.join("")
                $("#word").text(dashes)
            }
        }



        var wrongGuesses = 0;

        function letterSelect() {
            $(this).addClass("disabled")
            var matchFound = false;
            var letterSelected = $(this).data("letter")
            for (var a = 0; a <= splitWord.length; a++) {
                if (letterSelected === splitWord[a]) {
                    dashesArray[a] = letterSelected
                    matchFound = true
                    $("#word").text(dashesArray.join(""))
                }
                $("#word").text(dashesArray.join(""))
            }
            if (matchFound === false) {
                wrongGuesses++
                switch (wrongGuesses) {
                    case 1:
                        $("#galEmp").hide();
                        $("#galHead").show();
                        break;
                    case 2:
                        $("#galHead").hide();
                        $("#galBod").show();
                        break;
                    case 3:
                        $("#galBod").hide();
                        $("#galLLeg").show();
                        break;
                    case 4:
                        $("#galLLeg").hide();
                        $("#galRLeg").show();
                        break;
                    case 5:
                        $("#galRLeg").hide();
                        $("#galLArm").show();
                        break;
                    case 6:
                        $("#galLArm").hide();
                        $("#galFull").show();
                        $("#lose").show();
                        $(".letter").hide();
                        $(".newGame").show();
                        break;
                }
            } else if (matchFound === true) {
                if (dashesArray.join("") === splitWord.join("")) {
                    $("#win").show();
                    $(".letter").hide();
                    $(".newGame").show();
                }
            }
        }


    }
);