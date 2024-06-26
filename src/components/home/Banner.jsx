const Banner = () => {
  return (
    <div
      className="hero h-[600px] bannerBg"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Computer Shop</h1>
          <p className="mb-5">
            Here we have excellent computers for you. You can buy this with low cost. Buy and enjoy.
          </p>
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
