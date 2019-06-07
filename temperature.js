'use strict'

const startConversion = event => {
	$('#results_out').val('')

	if ($('#user_input').val() === '') {
		return;
	}

	if (isNaN($('#user_input').val()) && $('#user_input').val() !== '') {
		alert('Please enter a valid temperature')
		$('#user_input').val('')
		return;
	}

	const userInput = $('#user_input').val() || 0
	const scale = $('input[name=scale]:checked').val()

	if (scale === 'C') {
		$('#results_out').val(`${userInput} C = ${userInput * 9 / 5 + 32} F`)
	} else if (scale === 'F') {
		$('#results_out').val(`${userInput} F = ${(userInput - 32) * 5 / 9} C`)
	} else {
		alert('Please choose correct temperature scale!!')
	}
}

$('#convert').click(startConversion)
$('#user_input').on('keyup', startConversion)
$('input[name=scale]').click(startConversion)
