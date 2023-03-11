import { useRouter } from 'next/router';

export const LanguageSwitcher = () => {
  const router = useRouter()
  const { locale, locales, pathname, asPath, query } = useRouter();

  const handleLangChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    router.push({ pathname, query }, asPath, { locale: value })
  };

  return (
    <>
      <select
          id="locale"
          name="locale"
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue={locale}
          onChange={handleLangChange}
        >
          {locales.map((l, i) => {
            return (
              <option key={i} value={l}>
                  {l}
              </option>
            );
          })}
      </select>
    </>
  );
}