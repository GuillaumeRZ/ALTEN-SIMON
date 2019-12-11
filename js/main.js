$('.panel-collapse').on('show.bs.collapse', function () {
	$(this).siblings('.panel-heading').addClass('active');
});

$('.panel-collapse').on('hide.bs.collapse', function () {
	$(this).siblings('.panel-heading').removeClass('active');
});

$(document).ready(function() {	
	$('#userLastName').on('keyup', function() {
		var $this = $(this);
		$this.val($this.val().toUpperCase());
	});

	$('#userFirstName').on('keyup', function() {
		var $this = $(this);
		var str = $this.val();
		$this.val(str[0].toUpperCase() + str.slice(1));
	});

	$('form[name=mainForm]').submit(function(event) {
		event.preventDefault();

		var serializedData = $(this).serialize();
		console.log(serializedData);

		Swal.fire(
			'Form is submitted !',
		    serializedData,
		  	'success'
		);

		return false;
	});

	$('#eventParticipants').select2();
	$('#eventType').select2();
});

document.addEventListener('DOMContentLoaded', () => {
	const cleaveDate = new Cleave('#lounge-date', {
		date: true,
		delimiter: '/',
		datePattern: ['d', 'm', 'Y']
	});

	const cleaveTime = new Cleave('#lounge-time', {
		time: true,
		timePattern: ['h', 'm']
	});
});