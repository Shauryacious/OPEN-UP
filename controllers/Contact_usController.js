exports.getContact_us = (req, res) => {
  res.status(200).render('contact_us', {
    title: 'Contact Us'
  })
}