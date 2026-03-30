export default function Input({ placeholder, type = "text", onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full mb-3 p-3 bg-bgSecondary rounded-xl outline-none focus:ring-2 focus:ring-primary"
    />
  );
}