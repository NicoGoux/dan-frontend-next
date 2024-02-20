import { Grid } from "@mui/material";
import { AppContext } from "app/context/AppContext";
import Link from "next/link";
import { ReactElement, useContext } from "react";

interface RootLayoutProps {
  children: ReactElement;
}

const RootLayout = (props: RootLayoutProps) => {
  const categoryList = useContext(AppContext);
  console.log(categoryList);

  const { children } = props;
  return (
    <div className="RootLayout">
      <Grid container spacing={2}>
        <Grid xs={100} item={true}>
          <header>
            <ul>
              {categoryList?.categoryList.map((category: Category) => (
                <li key={category.id}>
                  <Link href={`/category/${category.name.toLowerCase()}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
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
