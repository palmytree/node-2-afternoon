const messages = []

let id = 0

module.exports = {
	read: (req, res) => {
		res.status(200).send(messages)
	},
	create: (req, res) => {
		const { text, time } = req.body

		const msg = {
			id: id++,
			text,
			time
		}

		messages.push(msg)
		res.status(200).send(messages)
	},
	update: (req, res) => {
		const { msg_id } = req.params
		const { text } = req.body

		const index = messages.findIndex(e => e.id === +msg_id)

		if (index === -1) return res.status(404).send('Message ID invalid')

		messages[index].text = text

		res.status(200).send(messages)
	},
	delete: (req, res) => {
		const { msg_id } = req.params

		const index = messages.findIndex(e => e.id === +msg_id)

		if (index === -1) return res.status(404).send('Message ID invalid')

		messages.splice(index, 1)

		res.status(200).send(messages)
	}
}
