import { Counter } from "entities/Counter";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";

function MainPage() {
  const { t } = useTranslation();

  const [value, setValue] = useState("");

  return (
    <div>
      {t("Главная страница")}
      <Counter />
      <Input value={value} onChange={(v) => setValue(v)} placeholder="Введите текст" />
      value = {value}
    </div>
  );
}

export default MainPage;
