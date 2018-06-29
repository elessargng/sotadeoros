var myModal =
(function(){ 'use strict';
	var _showModal =  function (message, title, _fn) {
		var titulo = title || 'Información';
		if ( _fn != null ){
			$('#aceptarbtn').click(_fn);
		}
		$('#simpleGlobalModalLabel').text(titulo);
		$('#simpleGlobalModal p.contenido').text(message);
		$('#simpleGlobalModal').modal('show');

	}

	return {
		showModal: _showModal
	};
})();
