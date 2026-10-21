import { useState, type FC, type JSX } from "react";
import { useTheme } from "@aplicacion";
import { filterThemes, SEARCH_THRESHOLD, ThemeSelectorPanel, ThemeSelectorProps, ThemeSelectorTrigger } from "@presentation";


/**
 * @description Permite buscar, visualizar y seleccionar temas disponibles.
 * @author Steveen Cues
 * @version 2.2.0
 */
export const ThemeSelector: FC<ThemeSelectorProps> = ({
  label = "Tema visual",
  placeholder = "Buscar tema...",
  className = "",
  showDescriptions = true,
}): JSX.Element => {
  const { theme, themes, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const filteredThemes = filterThemes(themes, search);

  const handleToggle = (): void => {
    setIsOpen((previousValue) => !previousValue);
    setSearch("");
  };

  const handleSelectTheme = (themeName: string): void => {
    setTheme(themeName);
    setIsOpen(false);
    setSearch("");
  };

  return (
    <div className={`relative w-full max-w-sm ${className}`}>
      <label className="mb-2 block text-sm font-semibold text-base-content">
        {label}
      </label>

      <ThemeSelectorTrigger
        theme={theme}
        isOpen={isOpen}
        onToggle={handleToggle}
      />

      {isOpen && (
        <ThemeSelectorPanel
          themes={filteredThemes}
          totalThemes={themes.length}
          selectedTheme={theme.name}
          search={search}
          showSearch={themes.length > SEARCH_THRESHOLD}
          placeholder={placeholder}
          label={label}
          showDescriptions={showDescriptions}
          onSearchChange={setSearch}
          onSelectTheme={handleSelectTheme}
        />
      )}
    </div>
  );
};

export default ThemeSelector;
