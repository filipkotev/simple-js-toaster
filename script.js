    let toastsContainer = document.createElement('div');
    toastsContainer.className = 'toasts-container';
    
    function toast(msg, type) {
      
      let div = document.createElement('div');
      div.id = 'toastr';
      div.className = `show ${type}`;
      
      let text = document.createTextNode(msg);
      
      div.appendChild(text);
      toastsContainer.appendChild(div);
      document.body.appendChild(toastsContainer);

      setTimeout(function (){
        div.className = div.className.replace("show", "");
        div.parentNode.removeChild(div);
      }, 3000);
    }