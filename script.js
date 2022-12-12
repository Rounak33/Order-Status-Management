let totalOrders = 0
const executeOrder = () => {
	totalOrders++
	document.getElementById('empty-order-img').style.display = 'none'

	let orderId = document.getElementById('order-id-input-text').value
	document.getElementById('order-id-input-text').value = ''

	createOrderCard(orderId)

	manageOrderStatus(orderId)

	if (orderId.length >= 2) {
		document.getElementById('order-id-input-text-valid').style.display = 'block'
		document.getElementById('order-id-input-text-invalid').style.display = 'none'
	
	}
	else {
		document.getElementById('order-id-input-text-invalid').style.display = 'block'
		document.getElementById('order-id-input-text-valid').style.display = 'none'
		error = true
	}
	
}
