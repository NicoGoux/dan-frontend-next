import { Divider, Grid } from "@mui/material";
import { AppContext } from "app/context/AppContext";
import Link from "next/link";
import { ReactElement, useContext, useState } from "react";
import MenuButton from "./MenuButton";
import Image from "next/image";

interface RootLayoutProps {
  children: ReactElement;
}

const RootLayout = (props: RootLayoutProps) => {
  const context = useContext(AppContext);

  console.log(context);

  const { children } = props;
  return (
    <div className="RootLayout">
      <Grid container spacing={2}>
        <Grid xs={100} item={true} className="shadow-xl">
          <header className="flex p-4">
            <figure>
              <Image src="/logo.png" width={200} height={40} alt={"logo"} />
            </figure>
            <ul className="flex w-full items-center text-xl">
              <li className="w-fit">
                <MenuButton
                  buttonLabel="categorias"
                  menuItems={context?.categoryList.map(
                    (category: Category) => ({
                      key: category.id,
                      label: category.name,
                      route: category.name.toLowerCase(),
                    }),
                  )}
                />
              </li>
              <li>
                <MenuButton
                  buttonLabel="proveedores"
                  menuItems={context?.supplierList.map(
                    (category: Category) => ({
                      key: category.id,
                      label: category.name,
                      route: category.name.toLowerCase(),
                    }),
                  )}
                />
              </li>
            </ul>
          </header>
        </Grid>
        <Grid xs={100} item={true}>
          {children}
        </Grid>
        {/* <Grid xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={8}>
          <Item>xs=8</Item>
        </Grid> */}
      </Grid>
    </div>
  );
};

export { RootLayout };
