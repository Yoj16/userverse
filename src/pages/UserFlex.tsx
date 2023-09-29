import React from "react";
import Card from "../components/card/Card";

export const UserFlex = (): JSX.Element => (
    <header>
        <h1>This is the UserFlex Page.</h1>
        <Card 
            id={2}
            picture="img.png"
            title="Joy"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
    </header>
)