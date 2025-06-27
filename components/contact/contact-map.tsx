export default function ContactMap() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Find Us</h2>
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7520895823944!2d32.5729!3d0.3136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb6c4b7b4b4b%3A0x1234567890abcdef!2sEntebbe%20Road%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1234567890123"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Pleasure & Safari Tours Office Location"
        ></iframe>
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-600">
          <strong>Address:</strong> Kamu Kamu Building, Entebbe Road, 2nd Floor, Suite F2, Kampala, Uganda
        </p>
      </div>
    </div>
  )
}
