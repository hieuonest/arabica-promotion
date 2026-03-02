import styled from "styled-components";

export default function AppHeader({ logo = null, iconOutlined = null }) {
  return (
    <ContainerHeader className="flex-between ">
      {logo && <img src={logo} alt="Logo" className="logo-mytel" />}
      {iconOutlined && (
        <div className="header-option">
          <img src={iconOutlined} alt="Icon-Menu" />
        </div>
      )}
    </ContainerHeader>
  );
}

const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 2.3%;

  .logo-mytel {
    width: 32.1%;
    max-width: 283px;
  }

  .header-option {
    width: 10%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: 3px solid #fff;
    padding: 0.19%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
      width: 59.5%;
      height: auto;
      object-fit: cover;
    }
  }
`;
