const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="bottom-0 left-0 right-0 pt-3">
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        <p className="text-gray-400 text-sm text-center font-semibold">
          © 2018 - {currentYear} MisterRevenue LLC.<br /> All Rights Reserved.
        </p>
      </div>
    </section>
  )
}

export default Footer
