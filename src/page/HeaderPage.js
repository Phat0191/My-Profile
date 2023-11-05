import { DarkMode } from "../components/darkMode/DarkMode";

export function HeaderPage() {
  return (
    <div className="max-w-8xl mx-auto">
      <div className="flex items-center justify-between px-8 border-b py-4">
        <DarkMode />
      </div>
    </div>
  );
}
