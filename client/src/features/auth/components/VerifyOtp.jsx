const VerifyOtp = ({ otp, onChange, onKeyDown, inputRefs }) => {
  return (
    <div className="flex justify-center space-x-2">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => onChange(index, e)}
          onKeyDown={(e) => onKeyDown(index, e)}
          className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500"
        />
      ))}
    </div>
  );
};

export default VerifyOtp;
