var dispositivo = navigator.userAgent.toLowerCase();
            if( dispositivo.search(/iphone|ipod|ipad|Opera Mini|IEMobile|BlackBerry|android/) > -1 ){ 
            document.location = "../galileogeoservices/mobile/index.html";
            };