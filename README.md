# ui-progressbar-quote

I wanted to make a program that could help developers choose border color gradients for an image. The user can choose the intensity of the colors from a range of palettes. 

There are 2 sets of 4 colors per color theme.

Example: 
Background around the image is like that: linear-gradient(30deg, {value1[3], value2[1]});

And you can choose:

Palette1: ["yellow", "orange", "orangered", "red"];
Palette2: ["yellow", "orange", "orangered", "red"];

or

Palette1: ["yellow", "orange", "orangered", "red"];
Palette2: ["aqua", "deepskyblue", "blue", "violet"];

You can:
- download images from public/images
- background and/or images with same quote 
- background and/or quote with same image
- background and/or images and change quote

## Install

`$ git clone ...`
`$ cd vite-project`
`$ pnpm install`

## Features

- Quote from API call https://api.quotable.io/random
- Img from API call https://picsum.photos/1600/1000 & from public/images
- progressbar with framer-motion (display percent and percentage change depends of intensity of colors).

Enjoy it !

ko@l@tree :koala: