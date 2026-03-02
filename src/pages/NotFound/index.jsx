import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import PATH from "../../configs/paths/PATH";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const navigate = useNavigate();
    const { t } = useTranslation();

  return (
    <Result
      status="404"
      title="404"
      subTitle={t("not_found.sub_title")}
      extra={
        <Button type="primary" onClick={() => navigate(PATH.HOME)}>
          {t("not_found.back_home")}
        </Button>
      }
    />
  );
}
