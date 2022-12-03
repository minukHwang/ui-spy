import React from "react";
import "./BreadcrumbPage.scss";
import CloseBtn from "../../components/CloseBtn";
import Breadcrumb from "../../components/uiitems/Breadcrumb";
import { ReactComponent as Folder } from "../../static/svg/shadow/folder.svg";
import { ReactComponent as Folder2 } from "../../static/svg/shadow/folder2.svg";
import { ReactComponent as Folder3 } from "../../static/svg/shadow/folder3.svg";
import { ReactComponent as Folder4 } from "../../static/svg/shadow/folder4.svg";
import { useEffect, useRef, useState } from "react";

const BreadcrumbPage = ({ colors, setMenuHidden }) => {
  const linkRef0 = useRef();
  const linkRef1 = useRef();
  const linkRef2 = useRef();
  const linkRef3 = useRef();
  const folderRef = useRef();
  const folderRef2 = useRef();
  const folderRef3 = useRef();
  const folderRef4 = useRef();
  const [folderNum, setFolderNum] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const handleClick0 = () => {
    setFolderNum(0);
  };
  const handleClick1 = () => {
    setFolderNum(1);
  };
  const handleClick2 = () => {
    setFolderNum(2);
  };
  const handleClick3 = () => {
    setFolderNum(3);
  };

  const breadButtonRef = useRef();
  useEffect(() => {
    if (isOpen === true) {
      folderRef.current.style.scale = 0;
      folderRef2.current.style.scale = 0;
      folderRef3.current.style.scale = 0;
      folderRef4.current.style.scale = 0;

      folderRef.current.style.display = "none";
      folderRef2.current.style.display = "none";
      folderRef3.current.style.display = "none";
      folderRef4.current.style.display = "none";

      linkRef0.current.style.color = colors.orange;
      linkRef1.current.style.color = "";
      linkRef2.current.style.color = "";
      linkRef3.current.style.color = "";
      console.log("open");
      setIsOpen(false);
      setTimeout(() => {
        folderRef.current.style.display = "flex";
        folderRef2.current.style.display = "flex";
        folderRef3.current.style.display = "flex";
        folderRef4.current.style.display = "flex";
        setTimeout(() => {
          folderRef.current.style.scale = 1;
        }, 300);
      }, 100);
    }

    if (isOpen === false) {
      switch (folderNum) {
        case 0:
          folderRef.current.style.scale = 1;
          folderRef2.current.style.scale = 0;
          folderRef3.current.style.scale = 0;
          folderRef4.current.style.scale = 0;
          linkRef0.current.style.color = colors.orange;
          linkRef1.current.style.color = "";
          linkRef2.current.style.color = "";
          linkRef3.current.style.color = "";
          console.log("first");
          break;
        case 1:
          linkRef0.current.style.color = "";
          linkRef1.current.style.color = colors.blue;
          linkRef2.current.style.color = "";
          linkRef3.current.style.color = "";
          folderRef.current.style.scale = 3.5;
          folderRef2.current.style.scale = 1;
          folderRef3.current.style.scale = 0;
          folderRef4.current.style.scale = 0;
          break;
        case 2:
          linkRef0.current.style.color = "";
          linkRef1.current.style.color = "";
          linkRef2.current.style.color = colors.green;
          linkRef3.current.style.color = "";
          folderRef2.current.style.scale = 3.5;
          folderRef3.current.style.scale = 1;
          folderRef4.current.style.scale = 0;
          break;
        case 3:
          linkRef0.current.style.color = "";
          linkRef1.current.style.color = "";
          linkRef2.current.style.color = "";
          linkRef3.current.style.color = colors.pink;
          folderRef3.current.style.scale = 3.5;
          folderRef4.current.style.scale = 1;
          break;
        default:
      }
    }

    setMenuHidden(true);
  }, [folderNum]);
  return (
    <div
      className="contents-container"
      style={{ backgroundColor: colors.pink }}
    >
      <div className="breadcrumb">
        <div className="breadcrumb-container">
          <div
            className="breadcrumb-link one"
            onClick={handleClick0}
            ref={linkRef0}
          >
            Bread
          </div>
          <div className="breadcrumb-deco">&gt;</div>
          <div
            className="breadcrumb-link two"
            onClick={handleClick1}
            ref={linkRef1}
          >
            Crumb
          </div>
          <div className="breadcrumb-deco">&gt;</div>
          <div
            className="breadcrumb-link three"
            onClick={handleClick2}
            ref={linkRef2}
          >
            Bread
          </div>
          <div className="breadcrumb-deco">&gt;</div>
          <div
            className="breadcrumb-link four"
            onClick={handleClick3}
            ref={linkRef3}
          >
            Crumb
          </div>
        </div>
      </div>
      <div className="folder 0" ref={folderRef}>
        <Folder></Folder>
      </div>
      <div className="folder 1" ref={folderRef2}>
        <Folder2></Folder2>
      </div>
      <div className="folder 2" ref={folderRef3}>
        <Folder3></Folder3>
      </div>
      <div className="folder 3" ref={folderRef4}>
        <Folder4></Folder4>
      </div>
      <CloseBtn
        linkTo="stationery"
        color={colors.yellow}
        hoverColor={colors.blue}
      ></CloseBtn>
    </div>
  );
};

export default BreadcrumbPage;
