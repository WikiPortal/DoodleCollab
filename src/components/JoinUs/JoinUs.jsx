
const JoinUs = () => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col md:flex-row gap-4 relative justify-between items-center text-white w-[83vw] md:h-[35vh] px-[8vh] py-[2vh] rounded-[4vh]" style={{background: "linear-gradient(163deg, #000000, #0b1059)"}}>
        <div className="invite-content text-center flex md:static flex-col items-center md:items-start justify-center min-h-[200px] md:min-h-[auto]">
          <h1 className="text-[4.5vh] font-[550] leading-[1.2] text-white text-left md:text-center">
            Join <span className="text-[#157dde]">DoodleCollab</span>
          </h1>
          <h1 className="text-left md:text-center text-white text-[4.5vh] font-[550] leading-[1.2]">discord community</h1>
          <p className="text-[#a0f3e1] text-[2.5vh] mt-[1vh]">Your Ultimate Whiteboard and Sharing Solution</p>
        </div>
        <a href="https://discord.com/invite/Ar84xkXkZt">
          <button className="font-normal text-[2vh] rounded-[2vh] flex justify-center items-center bg-white text-[#055eac] md:font-medium md:text-[2.5vh] w-[300px] h-[60px] text-center border-[none]">Join Discord</button>
        </a>
      </div>
    </section>
  );
};

export default JoinUs;
