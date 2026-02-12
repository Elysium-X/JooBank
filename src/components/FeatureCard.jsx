import styles from "../style";

const FeatureCard = ({ icon, title, content }) => (
  <div className={`flex flex-row  p-6  rounded-[20px] mb-6 last:mb-0 feature-card cursor-pointer`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}  bg-dimBlue mb-4`}>
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
        </p>

    </div>
  </div>
)


export default FeatureCard;
