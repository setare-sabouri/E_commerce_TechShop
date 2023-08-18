const Announcement = () => {
  return (
    <div className="bg-black text-white text-[10px] md:text-sm flex gap-4 justify-between p-4 text-center " role="alert">
      <p>Mon-Thu:  9:00 AM - 5:30 PM</p>
      <p> Visit our showroom in 1234 Street Adress City Address, 1234  Contact Us</p>
      <div className="flex gap-1 items-center">
        <p>Call Us: (00) 1234 5678</p>
        <a href="#">
          <img src="footer/facebook.png" alt="Facebook" />
        </a>
        <a href="#">
          <img src="footer/instagram.png" alt="Instagram" />
        </a>
      </div>


    </div>
  );
};

export default Announcement;
