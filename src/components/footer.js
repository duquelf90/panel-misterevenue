const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="relative pt-10 md:pt-20 overflow-hidden">
      <div className="flex flex-wrap justify-center items-center my-10">
        <p className="text-gray-600 text-sm text-center">
          © 2018 - {currentYear} MisterRevenue LLC. All Rights Reserved.
        </p>
      </div>
    </section>
  )
}

export default Footer
