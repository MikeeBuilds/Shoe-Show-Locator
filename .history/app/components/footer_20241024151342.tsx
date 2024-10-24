export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-lg font-semibold mb-2">About Us</h2>
            <p className="text-sm">
              Sneaker & Vintage Locator is your go-to platform for discovering rare sneakers and vintage clothing. Join our community and connect with enthusiasts worldwide.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Marketplace</a></li>
              <li><a href="#" className="hover:underline">Events</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-lg font-semibold mb-2">Contact</h2>
            <p className="text-sm">Email: support@sneakerlocator.com</p>
            <p className="text-sm">Phone: +1 (555) 123-4567</p>
          </div>

          {/* Social Media Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.14 12.14 0 013 4.89a4.28 4.28 0 001.32 5.71 4.27 4.27 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.19 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.97A8.6 8.6 0 012 19.54a12.14 12.14 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.72 8.72 0 0024 4.56a8.59 8.59 0 01-2.54.7z" />
                </svg>
              </a>
              <a href="#" className="hover:text-orange-500">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.06 8.19 8.94v-6.34h-2.47v-2.6h2.47v-1.98c0-2.44 1.49-3.78 3.67-3.78 1.05 0 1.95.08 2.21.11v2.56h-1.52c-1.19 0-1.42.57-1.42 1.39v1.82h2.84l-.37 2.6h-2.47v6.34c4.59-.88 8.19-4.53 8.19-8.94 0-5.5-4.46-9.96-9.96-9.96z" />
                </svg>
              </a>
              <a href="#" className="hover:text-orange-500">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.06 8.19 8.94v-6.34h-2.47v-2.6h2.47v-1.98c0-2.44 1.49-3.78 3.67-3.78 1.05 0 1.95.08 2.21.11v2.56h-1.52c-1.19 0-1.42.57-1.42 1.39v1.82h2.84l-.37 2.6h-2.47v6.34c4.59-.88 8.19-4.53 8.19-8.94 0-5.5-4.46-9.96-9.96-9.96z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 Sneaker & Vintage Locator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}