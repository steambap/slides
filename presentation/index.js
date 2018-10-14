// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import codeExample from "./example.js";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Helvetica",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            WebAssembly 介绍
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            一种运行在现代浏览器中的新型代码
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="1F2022">
          <Heading size={6} textColor="secondary" caps>
            WebAssembly 是什么？
          </Heading>
          <Appear fid="1">
            <Text margin="10px 0 0" size={6} textColor="tertiary" fit>
              *https://developer.mozilla.org/en-US/docs/WebAssembly/Concepts
            </Text>
          </Appear>
          <Appear fid="2">
            <List>
              <ListItem>一种运行在现代浏览器中的新型代码</ListItem>
              <ListItem>运行效率更高</ListItem>
              <ListItem>
                为 C/C++/Rust 这样的底层编程语言提供一种高效的编译目标
              </ListItem>
              <ListItem>WebAssembly 模块可以被 web 或 node 应用调用</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="secondary" caps>
            Go/WebAssembly
          </Heading>
          <Text margin="10px 0 0" size={6} textColor="tertiary" fit>
            *https://github.com/golang/go/wiki/WebAssembly
          </Text>
          <List>
            <Appear fid="1">
              <ListItem>
                Golang v1.11 添加了对 WebAssembly 的实验性支持
              </ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>Hello, World 文件 1.3Mb</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>没有任何框架，DOM API 调用缺乏抽象</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <CodePane lang="clike" source={codeExample} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              Web assembly is going to democratize the frontend. I'm predicting
              that in 2 years or less, Go, Swift, Rust will be 1/3 of the
              frontend code
            </Quote>
            <Cite>Brian Ketelsen</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
