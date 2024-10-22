export function Pricing() {
  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Pricing Plans</h2>
      <div className="flex justify-center mt-8">
        <div className="border p-4 m-2 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Basic</h3>
          <p className="text-lg">$10/month</p>
          <p>Access to all events</p>
        </div>
        <div className="border p-4 m-2 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Premium</h3>
          <p className="text-lg">$20/month</p>
          <p>Access to exclusive events</p>
        </div>
      </div>
    </section>
  );
}
