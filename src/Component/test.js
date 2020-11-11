import React, { useState, useEffect } from "react";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { useHistory } from "react-router-dom";

import { Categorys } from "./SellerComponent/CategoryOption";

export default function Test() {
  const history = useHistory();
  return (
    <TreeView
      style={{ height: "240", maxWidth: "200px", flexGrow: "1" }}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {Categorys.map((category, index) => (
        <TreeItem
          nodeId={index}
          label={category.category}
          onLabelClick={() => console.log("clicked category")}
        >
          {category.subCategorys.map((subCat, i) => (
            <TreeItem
              nodeId={i + 100}
              label={subCat.subCatageory}
              onLabelClick={() =>
                history.push("/category/sub-category/" + subCat.subCatageory)
              }
            >
              {subCat.subSubCategory.map((sub, index) => (
                <TreeItem
                  nodeId={index + 200}
                  label={sub}
                  onClick={() => history.push("/category/subCategory/" + sub)}
                />
              ))}
            </TreeItem>
          ))}
        </TreeItem>
      ))}
    </TreeView>
  );
}
