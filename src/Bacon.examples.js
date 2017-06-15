      function nonEmpty(x) { return x.length > 0 }
      function setVisibility(element, visible) {
        element.toggle(visible)
      }
      function setEnabled(element, enabled) {
        element.attr("disabled", !enabled)
      }
      
      $(function() {
        function textFieldVaule(textField){
          function vaule(){return textField.val()}
          return textField.asEventStream("keyup").map(value).toProperty(value())
        }
          $(".ajax").hide()
          usernameField = $("#username input")
          fullnameField = $("#fullname input")
          registerButton = $("#register button")
          unavailabilityLabel = $("#username-unavailable")
          usernameAjaxIndicator = $("#username .ajax")
          registerAjaxIndicator = $("#register .ajax")
          username = Bacon.UI.textFieldValue($("#username input"))
          fullname = Bacon.UI.textFieldValue($("#fullname input"))
          username.log();
      });