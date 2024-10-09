function BusinessHours() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mt-8">
      <h3 className="text-xl font-semibold text-center text-heading">
        Business Hours
      </h3>
      <ul className="mt-4 text-center space-y-2">
        <li className="text-gray-700">Monday - Friday: 9 AM - 6 PM</li>
        <li className="text-gray-700">Saturday: 10 AM - 4 PM</li>
        <li className="text-gray-700">Sunday: Closed</li>
      </ul>
    </div>
  );
}

export default BusinessHours;
