$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })


  $('.decrease,.increase').on('click', function (e) {
    e.preventDefault();
    var inputQty = $(this).parent().find('input');
    var currentVal = parseInt(inputQty.val());
    var steps = parseInt(inputQty.attr('step'));
    if ($(this).hasClass('increase')) {
      if (currentVal <= 0 || currentVal <= inputQty.attr('min')) {
        return;
      }
      currentVal = currentVal - steps;
    } else {
      if (currentVal >= inputQty.attr('max') && inputQty.attr('max') !=='') {
        return;
      }
      currentVal = currentVal + steps;
    }
    inputQty.val(currentVal);
  });