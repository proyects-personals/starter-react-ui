import type { FC, JSX } from "react";
import { useLanguage, useTheme } from "@aplicacion";
import {
  filterThemes,
  prioritizeSelectedTheme,
  SEARCH_THRESHOLD,
  ThemeSelectorPanel,
  type ThemeSelectorProps,
  ThemeSelectorTrigger,
  translateThemeSelectorMessages,
  useThemeSelectorInteraction,
} from "@presentation";

/**
 * @description Permite buscar, visualizar y seleccionar temas disponibles.
 * Prioriza el tema seleccionado sin perder los demas temas filtrados.
 * @author Steveen Cues
 * @version 3.5.0
 */
export const ThemeSelector: FC<ThemeSelectorProps> = ({
  label = "theme.title",
  placeholder = "theme.searchPlaceholder",
  className = "",
  showDescriptions = true,
  translations,
}): JSX.Element => {
  const { theme, themes, setTheme } = useTheme();
  const { t } = useLanguage();

  const {
    isOpen,
    search,
    containerRef,
    handleToggle,
    handleSearchChange,
    handleSelectTheme,
  } = useThemeSelectorInteraction({
    onSelectTheme: setTheme,
  });

  const messages = translateThemeSelectorMessages(
    translations,
    label,
    placeholder,
    t,
  );

  const filteredThemes = filterThemes(themes, search, t);
  const visibleThemes = prioritizeSelectedTheme(filteredThemes, theme);

  return (
    <div ref={containerRef} className={`relative min-w-0 ${className}`}>
      <ThemeSelectorTrigger
        theme={theme}
        isOpen={isOpen}
        selectedLabel={messages.selected}
        onToggle={handleToggle}
      />

      {isOpen && (
        <ThemeSelectorPanel
          themes={visibleThemes}
          totalThemes={themes.length}
          selectedTheme={theme.name}
          search={search}
          showSearch={themes.length > SEARCH_THRESHOLD}
          label={messages.title}
          showDescriptions={showDescriptions}
          translations={messages}
          onSearchChange={handleSearchChange}
          onSelectTheme={handleSelectTheme}
        />
      )}
    </div>
  );
};

export default ThemeSelector;
