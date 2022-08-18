import { Container, Row, Col } from "react-bootstrap";
import { PMGCard } from './PMGCard';
import './PMG.css';
import colorSharp2 from "../../assets/img/color-sharp2.png";

export const PMG = () => {
  const steps = [
    {
      title: "Echange",
      description: "Discussion sur vos objectifs, vos valeurs et sur les différentes manières de mener à bien le projet.",
      image: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik01OS4xMjUsMS4zNDM3NWMtMzEuODQ2ODcsMCAtNTcuNzgxMjUsMjUuOTM0MzggLTU3Ljc4MTI1LDU3Ljc4MTI1YzAsMTMuOTc1IDQuOTcyOTIsMjcuMTQzNzUgMTMuODQxNjcsMzcuNjI1bC0xMi43NjU2MiwxMy4zMDM2NWMtMS4wNzUsMS4yMDkzOCAtMS40ODAyMiwyLjk1NDY4IC0wLjgwODM1LDQuNDMyOGMwLjY3MTg4LDEuNDc4MTIgMi4xNTEwNSwyLjQxOTggMy43NjM1NSwyLjQxOThoMzcuNjI1YzIuMjg0MzgsMCA0LjAzMTI1LC0xLjc0Njg4IDQuMDMxMjUsLTQuMDMxMjVjMCwtMi4yODQzNyAtMS43NDY4NywtNC4wMzEyNSAtNC4wMzEyNSwtNC4wMzEyNWgtMjguMDg0OWw4LjczNDM4LC05LjEzODU1YzEuNjEyNSwtMS42MTI1IDEuNDc4MTIsLTQuMDMwMiAwLC01LjY0MjdjLTkuMTM3NSwtOS40MDYyNSAtMTQuMjQzMjIsLTIxLjc2ODc1IC0xNC4yNDMyMiwtMzQuOTM3NWMwLC0yNy40MTI1IDIyLjMwNjI1LC00OS43MTg3NSA0OS43MTg3NSwtNDkuNzE4NzVjMjEuOTAzMTMsMCA0MC44NDg5NSwxMy45NzU1MyA0Ny4yOTg5NSwzNC44MDM2NWMwLjY3MTg4LDIuMTUgMi45NTczLDMuMzU5MzggNS4xMDczLDIuNjg3NWMyLjE1LC0wLjY3MTg3IDMuMzU5MzgsLTIuOTU3MyAyLjY4NzUsLTUuMTA3M2MtNy41MjUsLTI0LjE4NzUgLTI5LjY5Njg4LC00MC40NDYzNSAtNTUuMDkzNzUsLTQwLjQ0NjM1ek0xMTIuODc1LDU1LjA5Mzc1Yy0zMS44NDY4NywwIC01Ny43ODEyNSwyNS45MzQzOCAtNTcuNzgxMjUsNTcuNzgxMjVjMCwzMS44NDY4OCAyNS45MzQzOCw1Ny43ODEyNSA1Ny43ODEyNSw1Ny43ODEyNWg1My43NWMxLjYxMjUsMCAzLjA4OTU4LC0wLjk0MTY3IDMuNjI3MDgsLTIuNDE5OGMwLjY3MTg4LC0xLjYxMjUgMC4yNjkyNywtMy4yMjM0MyAtMC44MDU3MywtNC40MzI4bC0xMi43NjU2MiwtMTMuMzAzNjVjOS4wMDMxMywtMTAuNDgxMjUgMTMuOTc1NTIsLTIzLjY1IDEzLjk3NTUyLC0zNy42MjVjMCwtMzEuODQ2ODcgLTI1LjkzNDM3LC01Ny43ODEyNSAtNTcuNzgxMjUsLTU3Ljc4MTI1ek0xMTIuODc1LDYzLjE1NjI1YzI3LjQxMjUsMCA0OS43MTkyNywyMi4zMDYyNSA0OS41ODQ5LDQ5LjcxODc1YzAsMTMuMTY4NzUgLTQuOTcxMzUsMjUuNTMxMjUgLTE0LjI0MzIzLDM0LjkzNzVjLTEuNDc4MTMsMS42MTI1IC0xLjQ3ODEzLDQuMDMwMiAwLDUuNjQyN2w4Ljg2ODIzLDkuMTM4NTVoLTQ0LjIwOTljLTI3LjQxMjUsMCAtNDkuNzE4NzUsLTIyLjMwNjI1IC00OS43MTg3NSwtNDkuNzE4NzVjMCwtMjcuNDEyNSAyMi4zMDYyNSwtNDkuNzE4NzUgNDkuNzE4NzUsLTQ5LjcxODc1ek05Mi43MTg3NSw5OS40Mzc1Yy0yLjI4NDM3LDAgLTQuMDMxMjUsMS43NDY4OCAtNC4wMzEyNSw0LjAzMTI1YzAsMi4yODQzNyAxLjc0Njg4LDQuMDMxMjUgNC4wMzEyNSw0LjAzMTI1aDQwLjMxMjVjMi4yODQzOCwwIDQuMDMxMjUsLTEuNzQ2ODggNC4wMzEyNSwtNC4wMzEyNWMwLC0yLjI4NDM3IC0xLjc0Njg3LC00LjAzMTI1IC00LjAzMTI1LC00LjAzMTI1ek05Mi43MTg3NSwxMTkuNTkzNzVjLTIuMjg0MzcsMCAtNC4wMzEyNSwxLjc0Njg4IC00LjAzMTI1LDQuMDMxMjVjMCwyLjI4NDM3IDEuNzQ2ODgsNC4wMzEyNSA0LjAzMTI1LDQuMDMxMjVoMTMuNDM3NWMyLjI4NDM3LDAgNC4wMzEyNSwtMS43NDY4OCA0LjAzMTI1LC00LjAzMTI1YzAsLTIuMjg0MzcgLTEuNzQ2ODgsLTQuMDMxMjUgLTQuMDMxMjUsLTQuMDMxMjV6TTEyNy42NTYyNSwxMTkuNTkzNzVjLTIuMjg0MzcsMCAtNC4wMzEyNSwxLjc0Njg4IC00LjAzMTI1LDQuMDMxMjVjMCwyLjI4NDM3IDEuNzQ2ODgsNC4wMzEyNSA0LjAzMTI1LDQuMDMxMjVoNS4zNzVjMi4yODQzOCwwIDQuMDMxMjUsLTEuNzQ2ODggNC4wMzEyNSwtNC4wMzEyNWMwLC0yLjI4NDM3IC0xLjc0Njg3LC00LjAzMTI1IC00LjAzMTI1LC00LjAzMTI1eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+",
    },
    {
      title: "Accord",
      description: "Proposition de devis, confirmation de la ligne directive du projet.",
      image: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xMTcuNzEyNSwxNC4xOWMtMy41MDcxOSwwLjIwMTU2IC02Ljk2MDYyLDEuMDYxNTYgLTEwLjIxMjUsMi42ODc1bC0xOC45Miw5LjI0NWgtNTMuNzVsLTMwLjUzLC03LjQxNzVjLTAuNDU2ODcsLTAuMTM0MzcgLTAuOTI3MTksLTAuMTYxMjUgLTEuMzk3NSwtMC4xMDc1Yy0xLjY2NjI1LDAuMjAxNTYgLTIuOTI5MzcsMS41NzIxOSAtMy4wMSwzLjI1MTg4Yy0wLjA4MDYyLDEuNjY2MjUgMS4wNDgxMywzLjE1NzgxIDIuNjg3NSwzLjUyMDYybDMwLjk2LDcuNTI1bDAuNDMsMC4xMDc1aDQwLjUyNzVsLTI5LjI0LDE0LjI5NzVjLTAuMTIwOTQsMC4wNTM3NSAtMC4yMDE1NiwwLjE2MTI1IC0wLjMyMjUsMC4yMTVjLTQuNTQxODcsMi4wMDIxOSAtNS43Mzc4MSw4LjIxMDMxIC0yLjM2NSwxMS44MjVsLTAuMTA3NSwwLjEwNzVjMC4wNTM3NSwwLjA1Mzc1IDAuMTYxMjUsMC4wNTM3NSAwLjIxNSwwLjEwNzVjMTAuMjM5MzgsMTEuMjIwMzEgMjYuNDU4NDQsMTQuOTQyNSA0MC43NDI1LDkuMzUyNWgwLjEwNzVsMjAuMjEsLTcuODQ3NWw0MS43MSw0MS44MTc1YzMuMTU3ODEsMy4xNTc4MSAzLjE1NzgxLDguMTI5NjkgMCwxMS4yODc1Yy0zLjE1NzgxLDMuMTU3ODEgLTguMTI5NjksMy4xNTc4MSAtMTEuMjg3NSwwYy0xLjM3MDYyLC0xLjEwMTg3IC0zLjM0NTk0LC0wLjk5NDM3IC00LjU5NTYyLDAuMjQxODhjLTEuMjM2MjUsMS4yNDk2OSAtMS4zNDM3NSwzLjIyNSAtMC4yNDE4OCw0LjU5NTYyYzMuMTU3ODEsMy4xNTc4MSAzLjE1NzgxLDguMjM3MTkgMCwxMS4zOTVjLTMuMTU3ODEsMy4xNTc4MSAtOC4xMjk2OSwzLjE1NzgxIC0xMS4yODc1LDBsLTIuNDcyNSwtMi40NzI1Yy0xLjM3MDYyLC0xLjEwMTg3IC0zLjM0NTk0LC0wLjk5NDM3IC00LjU5NTYyLDAuMjQxODhjLTEuMjM2MjUsMS4yNDk2OSAtMS4zNDM3NSwzLjIyNSAtMC4yNDE4OCw0LjU5NTYyYzMuMTU3ODEsMy4xNTc4MSAzLjE1NzgxLDguMjM3MTkgMCwxMS4zOTVjLTMuMTU3ODEsMy4xNTc4MSAtOC4xMjk2OSwzLjE1NzgxIC0xMS4yODc1LDBsLTIuMzY1LC0yLjQ3MjVjLTEuMzMwMzEsLTEuMzcwNjIgLTMuNTIwNjIsLTEuMzg0MDYgLTQuODkxMjUsLTAuMDUzNzVjLTEuMzcwNjIsMS4zMzAzMSAtMS4zODQwNiwzLjUyMDYzIC0wLjA1Mzc1LDQuODkxMjVjMy4xNTc4MSwzLjE1NzgxIDMuMTU3ODEsOC4yMzcxOSAwLDExLjM5NWMtMy4xNTc4MSwzLjE1NzgxIC04LjEyOTY5LDMuMTU3ODEgLTExLjI4NzUsMGwtNC4zLC00LjNsMi41OCwtMi41OGM1LjAzOTA2LC01LjAzOTA2IDUuMDM5MDYsLTEzLjIzNTk0IDAsLTE4LjI3NWMtMi41MTI4MSwtMi41MTI4MSAtNS44MzE4NywtMy43NjI1IC05LjEzNzUsLTMuNzYyNWMtMC4wNDAzMSwwIC0wLjA2NzE5LDAgLTAuMTA3NSwwYzAuMDUzNzUsLTMuMzg2MjUgLTEuMTk1OTQsLTYuNzg1OTQgLTMuNzYyNSwtOS4zNTI1Yy0yLjUxMjgxLC0yLjUxMjgxIC01LjgzMTg3LC0zLjc2MjUgLTkuMTM3NSwtMy43NjI1Yy0wLjE3NDY5LDAgLTAuMzYyODEsLTAuMDEzNDQgLTAuNTM3NSwwYzAuMTA3NSwtMy40NTM0NCAtMS4xMjg3NSwtNi45MzM3NSAtMy43NjI1LC05LjU2NzVjLTIuNTEyODEsLTIuNTEyODEgLTUuODMxODcsLTMuODcgLTkuMTM3NSwtMy44N2MtMC4xNzQ2OSwwIC0wLjM2MjgxLC0wLjAxMzQ0IC0wLjUzNzUsMGMwLjEwNzUsLTMuNDUzNDQgLTEuMTI4NzUsLTYuOTMzNzUgLTMuNzYyNSwtOS41Njc1Yy0yLjUxMjgxLC0yLjUxMjgxIC01LjgzMTg3LC0zLjc2MjUgLTkuMTM3NSwtMy43NjI1Yy0zLjMwNTYyLDAgLTYuNjI0NjksMS4yNDk2OSAtOS4xMzc1LDMuNzYyNWwtMy4xMTc1LDMuMTE3NWwtMTMuODY3NSwtMi4zNjVjLTAuMjE1LC0wLjA1Mzc1IC0wLjQzLC0wLjA5NDA2IC0wLjY0NSwtMC4xMDc1Yy0xLjg5NDY5LC0wLjEyMDk0IC0zLjUzNDA2LDEuMzMwMzEgLTMuNjU1LDMuMjI1Yy0wLjEyMDk0LDEuODk0NjkgMS4zMzAzMSwzLjUzNDA2IDMuMjI1LDMuNjU1bDExLjI4NzUsMi4wNDI1Yy0xLjAyMTI1LDQuMjMyODEgMC4wNDAzMSw4Ljg1NTMxIDMuMzMyNSwxMi4xNDc1YzIuNjYwNjMsMi42NjA2MyA2LjE5NDY5LDMuOTEwMzEgOS42NzUsMy43NjI1Yy0wLjE0NzgxLDMuNDgwMzEgMS4xMDE4OCw3LjAxNDM4IDMuNzYyNSw5LjY3NWMyLjY2MDYzLDIuNjYwNjMgNi4xOTQ2OSwzLjkxMDMxIDkuNjc1LDMuNzYyNWMtMC4xMDc1LDMuNDUzNDQgMS4xMjg3NSw2LjkzMzc1IDMuNzYyNSw5LjU2NzVjMi41NjY1NiwyLjU2NjU2IDUuOTY2MjUsMy44MTYyNSA5LjM1MjUsMy43NjI1Yy0wLjA4MDYyLDMuMzk5NjkgMS4xMjg3NSw2LjgyNjI1IDMuNjU1LDkuMzUyNWwwLjEwNzUsMC4xMDc1YzMuNTg3ODEsMy41MDcxOSA4Ljc0NzgxLDQuNDM0MzggMTMuMjIyNSwyLjkwMjVsNS4yNjc1LDUuMjY3NWM1Ljc3ODEzLDUuNzc4MTMgMTUuMjkxODgsNS43NzgxMyAyMS4wNywwYzIuODA4NDQsLTIuODA4NDQgNC4xMTE4OCwtNi41MTcxOSA0LjE5MjUsLTEwLjIxMjVjNC45NzE4OCwxLjMxNjg4IDEwLjQyNzUsMC4zMjI1IDE0LjI5NzUsLTMuNTQ3NWMyLjgwODQ0LC0yLjgwODQ0IDQuMjE5MzgsLTYuNTE3MTkgNC4zLC0xMC4yMTI1YzQuOTU4NDQsMS4zMDM0NCAxMC40Mjc1LDAuMzIyNSAxNC4yOTc1LC0zLjU0NzVjMy4zMDU2MywtMy4zMDU2MiA0LjU1NTMxLC03LjgwNzE5IDQuMDg1LC0xMi4xNDc1YzQuMzQwMzEsMC40ODM3NSA4Ljg0MTg4LC0wLjc3OTM3IDEyLjE0NzUsLTQuMDg1YzMuNjk1MzEsLTMuNjk1MzEgNS4wMTIxOSwtOC44ODIxOSAzLjk3NzUsLTEzLjY1MjVsMi4wNDI1LC0yLjA0MjVsMTIuNjg1LC0xLjgyNzVjMS44OTQ2OSwtMC4yOTU2MiAzLjE5ODEzLC0yLjA4MjgxIDIuOTAyNSwtMy45Nzc1Yy0wLjI5NTYyLC0xLjg5NDY5IC0yLjA4MjgxLC0zLjE5ODEyIC0zLjk3NzUsLTIuOTAyNWwtMTMuNzYsMi4xNWwtMS4wNzUsMC4xMDc1bC0yLjA0MjUsMi4wNDI1Yy0wLjI0MTg3LC0wLjI4MjE5IC0wLjQ4Mzc1LC0wLjU5MTI1IC0wLjc1MjUsLTAuODZsLTQyLjM1NSwtNDIuMzU1Yy0wLjE2MTI1LC0wLjE2MTI1IC0wLjM0OTM3LC0wLjMwOTA2IC0wLjUzNzUsLTAuNDNjLTAuMDQwMzEsLTAuMDQwMzEgLTAuMDY3MTksLTAuMDY3MTkgLTAuMTA3NSwtMC4xMDc1Yy0wLjkwMDMxLC0xLjMzMDMxIC0yLjU5MzQ0LC0xLjg1NDM3IC00LjA4NSwtMS4yOWwtMjIuMzYsOC42Yy0xMS43NTc4MSw0LjY0OTM4IC0yNC45OTM3NSwxLjYyNTk0IC0zMy4zMjUsLTcuNjMyNWwtMC4xMDc1LC0wLjEwNzVjLTAuNDQzNDQsLTAuNDQzNDQgLTAuNDcwMzEsLTAuNzUyNSAwLjEwNzUsLTAuOTY3NWgwLjIxNWwwLjEwNzUsLTAuMTA3NWw0Mi40NjI1LC0yMC43NDc1YzAuNzI1NjMsLTAuMTA3NSAxLjQxMDk0LC0wLjQ0MzQ0IDEuOTM1LC0wLjk2NzVsMTguMTY3NSwtOC45MjI1aDAuMTA3NWM2LjM0MjUsLTMuMTcxMjUgMTMuNzQ2NTYsLTIuNTI2MjUgMTkuNTY1LDEuMzk3NWwxLjI5LDEuNTA1bDAuMzIyNSwwLjQzbDAuNDMsMC4yMTVjNi4yNDg0NCw0LjMgMTMuNzczNDQsNS40NDIxOSAyMC44NTUsMy41NDc1djAuMTA3NWwwLjIxNSwtMC4xMDc1bDE2LjAxNzUsLTMuMzMyNWMxLjg2NzgxLC0wLjQxNjU2IDMuMDUwMzEsLTIuMjcwOTQgMi42MzM3NSwtNC4xMzg3NWMtMC40MTY1NiwtMS44Njc4MSAtMi4yNzA5NCwtMy4wNTAzMSAtNC4xMzg3NSwtMi42MzM3NWwtMTYuMTI1LDMuNDRsLTAuMTA3NSwwLjEwNzVoLTAuMTA3NWMtNS4xMzMxMiwxLjQyNDM4IC0xMC40Mjc1LDAuNDgzNzUgLTE1LjA1LC0yLjU4bC0xLjI5LC0xLjUwNWwtMC4zMjI1LC0wLjMyMjVsLTAuNDMsLTAuMzIyNWMtMy45NTA2MiwtMi43NjgxMiAtOC40NjU2MiwtNC4yNzMxMiAtMTMuMTE1LC00LjYyMjVjLTEuMTY5MDYsLTAuMDgwNjIgLTIuMzc4NDQsLTAuMDY3MTkgLTMuNTQ3NSwwek0zMC4xLDk1Ljc4MjVjMS41MDUsMCAzLjAzNjg4LDAuNjcxODggNC4zLDEuOTM1YzIuNTI2MjUsMi41MjYyNSAyLjUyNjI1LDYuMDczNzUgMCw4LjZsLTIuNjg3NSwyLjU4bC0wLjMyMjUsMC4zMjI1bC0wLjQzLDAuNTM3NWMtMi41MjYyNSwyLjUyNjI1IC02LjA3Mzc1LDIuNTI2MjUgLTguNiwwYy0yLjA2OTM3LC0yLjA2OTM3IC0yLjM3ODQ0LC00Ljc4Mzc1IC0xLjA3NSwtNy4wOTVjMC42MDQ2OSwtMC40MyAxLjA0ODEzLC0xLjAyMTI1IDEuMjksLTEuNzJsMi43OTUsLTIuNjg3NWwwLjQzLC0wLjUzNzVjMS4yNjMxMywtMS4yNjMxMiAyLjc5NSwtMS45MzUgNC4zLC0xLjkzNXpNNDMuNTM3NSwxMDkuMjJjMS41MDUsMCAzLjAzNjg4LDAuNjcxODggNC4zLDEuOTM1YzIuNTI2MjUsMi41MjYyNSAyLjUyNjI1LDUuOTY2MjUgMCw4LjQ5MjVsLTMuNDQsMy40NGMtMi41MjYyNSwyLjUyNjI1IC02LjA3Mzc1LDIuNTI2MjUgLTguNiwwYy0yLjUyNjI1LC0yLjUyNjI1IC0yLjUyNjI1LC01Ljk2NjI1IDAsLTguNDkyNWwzLjQ0LC0zLjQ0YzEuMjYzMTMsLTEuMjYzMTIgMi43OTUsLTEuOTM1IDQuMywtMS45MzV6TTU2Ljk3NSwxMjIuNjU3NWMxLjUwNSwwIDIuOTI5MzgsMC42NzE4OCA0LjE5MjUsMS45MzVjMi4wODI4MSwyLjA4MjgxIDIuNDMyMTksNC43OTcxOSAxLjA3NSw3LjA5NWMtMC40NzAzMSwwLjM0OTM4IC0wLjk2NzUsMC42NDUgLTEuMzk3NSwxLjA3NWwtMy40NCwzLjQ0djAuMTA3NWgtMC4xMDc1Yy0wLjM3NjI1LDAuNDE2NTYgLTAuNjU4NDQsMC44NDY1NiAtMC45Njc1LDEuMjljLTIuMjk3ODEsMS4zNTcxOSAtNS4wMTIxOSwxLjAwNzgxIC03LjA5NSwtMS4wNzVjLTIuNTI2MjUsLTIuNTI2MjUgLTIuNTI2MjUsLTUuOTY2MjUgMCwtOC40OTI1bDIuNTgsLTIuNjg3NWwwLjY0NSwtMC41Mzc1bDAuMjE1LC0wLjIxNWMxLjI2MzEzLC0xLjI2MzEyIDIuNzk1LC0xLjkzNSA0LjMsLTEuOTM1ek02OS45ODI1LDEzNS43NzI1YzEuNTA1LDAgMy4wMzY4OCwwLjU2NDM4IDQuMywxLjgyNzVjMi41MjYyNSwyLjUyNjI1IDIuNTI2MjUsNi4wNzM3NSAwLDguNmwtMy40NCwzLjQ0Yy0wLjI5NTYyLDAuMjk1NjMgLTAuNTM3NSwwLjYzMTU2IC0wLjg2LDAuODZjLTAuMDI2ODcsMC4wMTM0NCAtMC4wODA2MiwtMC4wMTM0NCAtMC4xMDc1LDBjLTIuNDA1MzEsMS42NjYyNSAtNS40MTUzMSwxLjM1NzE5IC03LjYzMjUsLTAuODZjLTEuNjI1OTQsLTEuNjI1OTQgLTIuMDAyMTksLTQuODc3ODEgLTAuODYsLTcuMzFjMC40MywtMC4zMzU5NCAwLjkwMDMxLC0wLjU3NzgxIDEuMjksLTAuOTY3NWwzLjQ0LC0zLjQ0YzAuNDU2ODgsLTAuNDU2ODcgMC44MDYyNSwtMC45OTQzNyAxLjE4MjUsLTEuNTA1YzAuODYsLTAuNDMgMS43ODcxOSwtMC42NDUgMi42ODc1LC0wLjY0NXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==",
    },
    {
      title: "Réalisation",
      description: "Réalisation du site. Rendez-vous réguliers afin d'assurer le bon déroulement du projet.",
      image: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik04Ny43MiwwYy0xMC40MDA2MiwwIC0xOC45Miw4LjUxOTM4IC0xOC45MiwxOC45MmMwLDEwLjQxNDA2IDguNTE5MzgsMTguOTIgMTguOTIsMTguOTJjMTAuNDE0MDYsMCAxOC45MiwtOC41MDU5NCAxOC45MiwtMTguOTJjMCwtMTAuNDAwNjIgLTguNTA1OTQsLTE4LjkyIC0xOC45MiwtMTguOTJ6TTg3LjcyLDYuODhjNi43MDUzMSwwIDEyLjA0LDUuMzYxNTYgMTIuMDQsMTIuMDRjMCw2LjY5MTg4IC01LjMzNDY5LDEyLjA0IC0xMi4wNCwxMi4wNGMtNi42Nzg0NCwwIC0xMi4wNCwtNS4zNDgxMiAtMTIuMDQsLTEyLjA0YzAsLTYuNjc4NDQgNS4zNjE1NiwtMTIuMDQgMTIuMDQsLTEyLjA0ek02MS45MiwzMS43MTI1YzAsMCAtMjEuOTgzNzUsMS4xMjg3NSAtMjQuNDAyNSwxLjI5Yy0yLjQzMjE5LDAuMTYxMjUgLTQuOTMxNTYsMC45NTQwNiAtNi42NjUsMi42ODc1Yy0wLjYxODEyLDAuNjE4MTMgLTEuOTYxODcsMi4yMDM3NSAtNC4xOTI1LDQuNjIyNWMtMi4yMzA2MiwyLjQxODc1IC01LjEzMzEyLDUuNTM2MjUgLTcuOTU1LDguNmMtNS42NDM3NSw2LjEyNzUgLTExLjE4LDEyLjA0IC0xMS4xOCwxMi4wNGgwLjEwNzV2MC4xMDc1Yy0yLjU1MzEyLDIuNzgxNTYgLTMuNDI2NTYsNi4xOTQ2OSAtMi42ODc1LDguODE1YzAuNzUyNSwyLjY0NzE5IDIuMzI0NjksNC4zIDQuMyw1LjI2NzVjMS41NTg3NSwwLjc2NTk0IDMuNzQ5MDYsMS40MjQzOCA2LjIzNSwxLjA3NWMxLjAyMTI1LC0wLjE0NzgxIDIuMDY5MzgsLTAuNDgzNzUgMy4xMTc1LC0wLjk2NzVsNS44MDUsMi45MDI1Yy0xLjczMzQ0LDMuNjQxNTYgLTMuMDc3MTksNy42NDU5NCAtMy42NTUsOS41Njc1Yy0wLjQwMzEyLDEuMzMwMzEgLTUuMDkyODEsMTcuMjk0MDYgLTkuODksMzMuNTRjLTIuMzkxODcsOC4xMTYyNSAtNC44Mzc1LDE2LjIzMjUgLTYuNjY1LDIyLjQ2NzVjLTEuODI3NSw2LjIzNSAtMy4wNTAzMSwxMC4yMjU5NCAtMy4zMzI1LDExLjI4NzVjLTAuMzYyODEsMS40MTA5NCAtMC45NDA2Miw0LjIxOTM4IC0wLjMyMjUsNy41MjVjMC42MTgxMywzLjMwNTYzIDMuMDIzNDQsNy4yMTU5NCA3LjYzMjUsOC44MTVjMi40OTkzOCwwLjg3MzQ0IDQuOTcxODgsMC43NzkzOCA2Ljk4NzUsMGMyLjAxNTYzLC0wLjc3OTM3IDMuNTA3MTksLTIuMjMwNjIgNC41MTUsLTMuNTQ3NWMxLjg1NDM4LC0yLjQzMjE5IDIuMjcwOTQsLTQuNjQ5MzcgMi4zNjUsLTUuMDUyNWgwLjEwNzVsMC4xMDc1LC0wLjQzbDE3LjczNzUsLTQ2LjY1NWwxMy4yMjI1LDEyLjI1NWw0LjA4NSwzMi4zNTc1djAuMzIyNWgwLjEwNzVjMC4wMTM0NCwwLjI5NTYzIDAuMDI2ODgsMi41MjYyNSAxLjE4MjUsNS4xNmMxLjIyMjgxLDIuNzk1IDQuMzUzNzUsNi4yMzUgOS4xMzc1LDYuMjM1YzIuMDU1OTQsMCAzLjg4MzQ0LC0wLjM0OTM3IDUuNDgyNSwtMS4xODI1YzEuNTk5MDYsLTAuODMzMTIgMi44NjIxOSwtMi4yMTcxOSAzLjU0NzUsLTMuNjU1YzEuMzcwNjMsLTIuODg5MDYgMS4xODI1LC01LjcyNDM3IDEuMTgyNSwtOC40OTI1YzAsLTUuNDQyMTkgLTEuMDc1LC0yOC4xMTEyNSAtMS4xODI1LC0zMC4yMDc1Yy0wLjEzNDM3LC0yLjY0NzE5IC0wLjc3OTM3LC01LjEzMzEyIC0yLjA0MjUsLTcuMzFjMCwtMC4wNDAzMSAwLC0wLjA2NzE5IDAsLTAuMTA3NWMtMS42MjU5NCwtMi43OTUgLTExLjM4MTU2LC0yMC40Mzg0NCAtMTIuNjg1LC0yMi43OWwwLjUzNzUsLTEuMDc1bDE5LjAyNzUsOS41Njc1YzAuODQ2NTYsMi42NDcxOSAyLjAyOTA2LDUuMDI1NjMgMy44Nyw2Ljg4YzEuOTg4NzUsMi4wMDIxOSA1LjExOTY5LDMuMTE3NSA4LjE3LDIuNDcyNWMxLjI3NjU2LC0wLjI2ODc1IDIuNTY2NTYsLTAuNzkyODEgMy42NTUsLTEuNTA1bDE4LjI3NSw5LjAzYy0xLjMzMDMxLDIuMDU1OTQgLTIuNjIwMzEsMy44NTY1NiAtMy43NjI1LDUuMDUyNWMtMS42MjU5NCwxLjcwNjU2IC0yLjc4MTU2LDIuMjU3NSAtMy40NCwyLjI1NzVjLTIuMDQyNSwwIC00LjA3MTU2LDAuMTYxMjUgLTYuMDIsMC45Njc1Yy0xLjk0ODQ0LDAuODA2MjUgLTMuNzQ5MDYsMi4zNzg0NCAtNC43Myw0LjUxNWMtMS43NzM3NSwzLjg1NjU2IC0xNC43Mjc1LDMwLjYzNzUgLTE0LjcyNzUsMzAuNjM3NWMtMC41MjQwNiwxLjA3NSAtMC40NTY4NywyLjMzODEzIDAuMTg4MTMsMy4zNDU5NGMwLjYzMTU2LDAuOTk0MzggMS43MzM0NCwxLjYxMjUgMi45MjkzNywxLjU5OTA2aDgyLjU2YzEuMTk1OTQsMC4wMTM0NCAyLjI5NzgxLC0wLjYwNDY5IDIuOTI5MzgsLTEuNTk5MDZjMC42NDUsLTEuMDA3ODEgMC43MTIxOSwtMi4yNzA5NCAwLjE4ODEyLC0zLjM0NTk0YzAsMCAtNS43MTA5NCwtMTIuMTIwNjIgLTExLjcxNzUsLTI0Ljk0Yy02LjAwNjU2LC0xMi44MTkzNyAtMTIuNDU2NTYsLTI2LjQ5ODc1IC0xMy40Mzc1LC0yOC44MWMtMS40Mzc4MSwtMy4zNTkzNyAtMy4wMjM0NCwtNS45MjU5NCAtNS4wNTI1LC03LjYzMjVjLTIuMDI5MDYsLTEuNzA2NTYgLTQuNTI4NDQsLTIuNDcyNSAtNi43NzI1LC0yLjQ3MjVjLTEuNzYwMzEsMCAtNC44OTEyNSwwLjQ4Mzc1IC03LjQxNzUsMy4wMWMtMi4xNjM0NCwyLjE2MzQ0IC00LjUwMTU2LDUuNjg0MDYgLTguMDYyNSwxMS42MWwtMTguNDksLTkuMzUyNWMwLjA1Mzc1LC0xLjMzMDMxIC0wLjIwMTU2LC0yLjY2MDYyIC0wLjUzNzUsLTQuMDg1Yy0wLjUyNDA2LC0yLjIxNzE5IC0yLjc5NSwtMTQuNzE0MDYgLTQuODM3NSwtMjYuMTIyNWMtMi4wNDI1LC0xMS40MDg0NCAtMy45Nzc1LC0yMi4xNDUgLTMuOTc3NSwtMjIuMTQ1Yy0wLjM4OTY5LC0yLjEzNjU2IC0xLjQzNzgxLC0zLjc4OTM3IC0yLjQ3MjUsLTUuNDgyNWMwLC0wLjA0MDMxIDAsLTAuMDY3MTkgMCwtMC4xMDc1Yy0wLjA1Mzc1LC0wLjYxODEyIC0wLjI4MjE5LC0xLjIwOTM3IC0wLjY0NSwtMS43MmMwLDAgLTAuMjAxNTYsLTAuMjAxNTYgLTAuMjE1LC0wLjIxNWMtMC4yNDE4NywtMC4zMjI1IC0zLjM4NjI1LC00LjU1NTMxIC0xMS4xOCwtOS44OWMtNy41OTIxOSwtNS4yMDAzMSAtMTAuOTc4NDQsLTYuNzU5MDYgLTE0LjA4MjUsLTYuODhjLTAuMTIwOTQsMCAtMC4zMDkwNiwtMC4xMDc1IC0wLjQzLC0wLjEwNzVjLTAuMTA3NSwwIC0wLjIxNSwwIC0wLjMyMjUsMGMtMC4wNDAzMSwwIC0wLjA2NzE5LDAgLTAuMTA3NSwwek02MS44MTI1LDM4LjU5MjVjMC4wNDAzMSwwIDAuMDY3MTksMCAwLjEwNzUsMGMwLjE3NDY5LDAuMDUzNzUgMC4zNDkzOCwwLjA4MDYzIDAuNTM3NSwwLjEwNzVoMC4xMDc1YzAuNzkyODEsMC4wMjY4OCAyLjk1NjI1LDAuNTc3ODEgMTAuNDI3NSw1LjY5NzVjNy4yNTYyNSw0Ljk3MTg4IDkuMzUyNSw4LjAyMjE5IDkuNDYsOC4xN2MwLDAuMDQwMzEgMCwwLjA2NzE5IDAsMC4xMDc1YzAuMDk0MDYsMC4xNDc4MSAwLjIwMTU2LDAuMjk1NjMgMC4zMjI1LDAuNDNjMC43NTI1LDAuODYgMS40OTE1NiwyLjI5NzgxIDEuODI3NSw0LjE5MjVjMCwwIDEuOTM1LDEwLjcyMzEzIDMuOTc3NSwyMi4xNDVjMi4wNDI1LDExLjQyMTg4IDQuMTc5MDYsMjMuMjA2NTYgNC45NDUsMjYuNDQ1YzAuMjk1NjMsMS4yMjI4MSAwLjM0OTM4LDEuOTIxNTYgMC4zMjI1LDIuMzY1YzAsMC4wNTM3NSAwLDAuMDY3MTkgMCwwLjEwNzVjLTAuMjAxNTYsMC4xODgxMyAtMC4zODk2OSwwLjQwMzEzIC0wLjUzNzUsMC42NDVjMCwwLjA0MDMxIDAsMC4wNjcxOSAwLDAuMTA3NWMtMC4yMTUsMC4wODA2MyAtMC40NTY4NywwLjA4MDYzIC0xLjA3NSwwLjIxNWMtMC45OTQzNywwLjIxNSAtMS4yMDkzNywwLjE4ODEzIC0xLjkzNSwtMC41Mzc1Yy0wLjcyNTYyLC0wLjcyNTYyIC0xLjU5OTA2LC0yLjM3ODQ0IC0yLjI1NzUsLTQuNjIyNWMtMC4wMjY4NywtMC4xMDc1IC0wLjE3NDY5LC0wLjcyNTYyIC0wLjIxNSwtMC44NmMtMC4wMjY4NywtMC4xMDc1IC0wLjA2NzE5LC0wLjIxNSAtMC4xMDc1LC0wLjMyMjVjLTEuMjksLTQuNjIyNSAtNS45MTI1LC0yMy4zNTQzNyAtOC40OTI1LC0zMy43NTVjLTAuMzIyNSwtMS4zNDM3NSAtMS40MTA5NCwtMi4zNjUgLTIuNzY4MTIsLTIuNTkzNDRjLTEuMzU3MTksLTAuMjQxODggLTIuNzE0MzgsMC4zNjI4MSAtMy40NjY4OCwxLjUxODQ0bC0xMy4xMTUsMTkuOTk1bC0yNS40Nzc1LC0xMi43OTI1YzIuODYyMTksLTQuMDE3ODEgOS45NDM3NSwtMTQuMDQyMTkgMTQuNjIsLTIxLjI4NWMwLjczOTA2LC0xLjA3NSAwLjc5MjgxLC0yLjQ4NTk0IDAuMTYxMjUsLTMuNjE0NjljLTAuNjQ1LC0xLjE0MjE5IC0xLjg2NzgxLC0xLjgyNzUgLTMuMTcxMjUsLTEuNzYwMzFsLTguMTcsMC40M2MtMC44NDY1NiwwLjA0MDMxIC0xLjY1MjgxLDAuMzc2MjUgLTIuMjU3NSwwLjk2NzVsLTE3LjIsMTcuMDkyNWwtMC4xMDc1LDAuMTA3NWMtMC4zNzYyNSwwLjM0OTM4IC0wLjczOTA2LDAuNjE4MTMgLTEuMDc1LDAuODZjLTAuMDQwMzEsMC4wMjY4OCAtMC4wNjcxOSwwLjA4MDYzIC0wLjEwNzUsMC4xMDc1Yy0wLjA2NzE5LDAuMDI2ODggLTAuMTQ3ODEsMC4wNjcxOSAtMC4yMTUsMC4xMDc1Yy0wLjE4ODEyLDAuMDk0MDYgLTAuMzYyODEsMC4yMDE1NiAtMC41Mzc1LDAuMzIyNWMtMC4xMzQzNywwLjA4MDYzIC0wLjIwMTU2LDAuMjU1MzEgLTAuMzIyNSwwLjMyMjVjLTAuNTY0MzcsMC4yODIxOSAtMS4xMjg3NSwwLjM3NjI1IC0xLjUwNSwwLjQzYy0wLjg2LDAuMTIwOTQgLTEuNTA1LC0wLjA2NzE5IC0yLjI1NzUsLTAuNDNjMC4yNjg3NSwwLjEzNDM4IC0wLjUxMDYyLC0wLjQ4Mzc1IC0wLjY0NSwtMC45Njc1Yy0wLjEzNDM3LC0wLjQ4Mzc1IC0wLjM4OTY5LC0wLjkxMzc1IDAuOTY3NSwtMi4zNjVjMC4wNDAzMSwtMC4wNDAzMSAwLjA2NzE5LC0wLjA2NzE5IDAuMTA3NSwtMC4xMDc1YzAsMCA1LjQyODc1LC01LjkxMjUgMTEuMDcyNSwtMTIuMDRjMi44MjE4OCwtMy4wNjM3NSA1LjcyNDM4LC02LjE5NDY5IDcuOTU1LC04LjZjMi4yMzA2MywtMi40MDUzMSAzLjk3NzUsLTQuMyAzLjk3NzUsLTQuM2MwLjY0NSwtMC42NDUgMC41MjQwNiwtMC42NDUgMi4yNTc1LC0wLjc1MjVjMS43MiwtMC4xMDc1IDIzLjA5OTA2LC0xLjI0OTY5IDIzLjg2NSwtMS4yOXpNMzkuMTMsNTYuMjIyNWMtNC44MjQwNiw3LjA1NDY5IC05LjU5NDM3LDEzLjg5NDM4IC0xMS4wNzI1LDE2LjAxNzVsLTMuMzMyNSwtMS43MnpNNzQuNDk3NSw3OC40NzVjMS42NTI4MSw2LjcxODc1IDMuNDEzMTMsMTMuNTk4NzUgNC44Mzc1LDE5LjM1bC0xMy4yMjI1LC02LjU1NzV6TTMwLjc0NSw4MS4yN2wyNS42OTI1LDEyLjlsLTEuMzk3NSwyLjc5NWMtMC40NzAzMSwwLjk5NDM4IC0wLjQzLDIuMTUgMC4xMDc1LDMuMTE3NWMwLDAgMTEuNTE1OTQsMjEuMDE2MjUgMTMuNTQ1LDI0LjUxYzAuMzM1OTQsMC41Nzc4MSAxLjExNTMxLDIuOTY5NjkgMS4xODI1LDQuM2MwLjA5NDA2LDEuODY3ODEgMS4xODI1LDI1LjMyOTY5IDEuMTgyNSwyOS43Nzc1YzAsMi43NjgxMyAtMC4yMjg0NCw0LjkzMTU2IC0wLjUzNzUsNS41OWMtMC4xNjEyNSwwLjMzNTk0IC0wLjEzNDM3LDAuMjgyMTkgLTAuNDMsMC40M2MtMC4yOTU2MiwwLjE0NzgxIC0xLjA2MTU2LDAuNDMgLTIuMzY1LDAuNDNjLTEuOTM1LDAgLTIuMjk3ODEsLTAuNzY1OTQgLTIuOTAyNSwtMi4xNWMtMC42MDQ2OSwtMS4zODQwNiAtMC42NDUsLTIuOTAyNSAtMC42NDUsLTIuOTAyNWMwLC0wLjEwNzUgMCwtMC4yMTUgMCwtMC4zMjI1bC00LjE5MjUsLTMzLjg2MjVjLTAuMDk0MDYsLTAuODE5NjkgLTAuNDcwMzEsLTEuNTg1NjIgLTEuMDc1LC0yLjE1bC0xOC4wNiwtMTYuNjYyNWMtMC44MzMxMiwtMC43NTI1IC0xLjk4ODc1LC0xLjAzNDY5IC0zLjA3NzE5LC0wLjc3OTM3Yy0xLjA4ODQ0LDAuMjU1MzEgLTEuOTg4NzUsMS4wMzQ2OSAtMi40MDUzMSwyLjA2OTM3bC0xOS42NzI1LDUyLjAzYy0wLjA0MDMxLDAuMTA3NSAtMC4wODA2MiwwLjIxNSAtMC4xMDc1LDAuMzIyNWMwLDAgLTAuNDQzNDQsMS43NjAzMSAtMS4zOTc1LDMuMDFjLTAuNDcwMzEsMC42MzE1NiAtMS4wMDc4MSwwLjk5NDM4IC0xLjUwNSwxLjE4MjVjLTAuNDk3MTksMC4xODgxMyAtMS4wMzQ2OSwwLjMwOTA2IC0yLjI1NzUsLTAuMTA3NWMtMi40MDUzMSwtMC44MzMxMiAtMi44MDg0NCwtMS45MjE1NiAtMy4xMTc1LC0zLjU0NzVjLTAuMzA5MDYsLTEuNjI1OTQgLTAuMDEzNDQsLTMuNjU1IDAuMjE1LC00LjUxNWMwLjAxMzQ0LC0wLjA2NzE5IDEuMzk3NSwtNC44Mzc1IDMuMjI1LC0xMS4wNzI1YzEuODI3NSwtNi4yMzUgNC4yNzMxMywtMTQuMzUxMjUgNi42NjUsLTIyLjQ2NzVjNC43OTcxOSwtMTYuMjMyNSA5LjY0ODEzLC0zMi43MjAzMSA5Ljg5LC0zMy41NGMwLjQwMzEzLC0xLjMzMDMxIDEuOTQ4NDQsLTUuMjQwNjIgMy40NCwtOC4zODV6TTEzMy40MDc1LDExMC4wOGMwLjI0MTg4LC0wLjA4MDYyIDAuNDcwMzEsMCAxLjI5LDBjMC43NjU5NCwwIDEuMzQzNzUsMC4wOTQwNiAyLjI1NzUsMC44NmMwLjkxMzc1LDAuNzY1OTQgMi4wODI4MSwyLjM1MTU2IDMuMjI1LDUuMDUyNWMxLjI5LDMuMDM2ODggNy41Mzg0NCwxNi4yMDU2MyAxMy41NDUsMjkuMDI1YzQuODEwNjMsMTAuMjc5NjkgNy42OTk2OSwxNi41OTUzMSA5LjM1MjUsMjAuMTAyNWgtNzEuNTk1YzIuOTI5MzgsLTYuMDczNzUgMTAuNjgyODEsLTIyLjE1ODQ0IDEyLjM2MjUsLTI1LjhjMC4yODIxOSwtMC42MTgxMiAwLjUyNDA2LC0wLjgwNjI1IDEuMTgyNSwtMS4wNzVjMC42NTg0NCwtMC4yNjg3NSAxLjc4NzE5LC0wLjQzIDMuMzMyNSwtMC40M2MzLjM3MjgxLDAgNi4wODcxOSwtMi4wMTU2MiA4LjM4NSwtNC40MDc1YzEuOTg4NzUsLTIuMDgyODEgMy43ODkzOCwtNC43NzAzMSA1LjU5LC03Ljc0YzAuMDQwMzEsLTAuMDQwMzEgMC4wNjcxOSwtMC4wNjcxOSAwLjEwNzUsLTAuMTA3NWMwLjAyNjg4LC0wLjA0MDMxIDAuMDgwNjMsLTAuMDY3MTkgMC4xMDc1LC0wLjEwNzVjMS4xNTU2MywtMC42MDQ2OSAxLjg1NDM4LC0xLjgxNDA2IDEuODI3NSwtMy4xMTc1YzMuODQzMTMsLTYuNDA5NjkgNi4zNTU5NCwtOS43OTU5NCA3Ljc0LC0xMS4xOGMwLjc2NTk0LC0wLjc2NTk0IDEuMDQ4MTMsLTAuOTk0MzcgMS4yOSwtMS4wNzV6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=",
    },
    {
      title: "Clé en main",
      description: "Votre site est désormais prêt et vous appartient. Vous êtes désormais prêt pour vous lancer, l'aventure peut démarrer !",
      image: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xMDMuNzYyNywwYy0xNi43NywtMC4yNDE4NyAtMzAuNDIzMzQsMTMuMzMyNTIgLTMwLjQyMzM0LDMwLjEyOTR2NDEuODk3N2MtMC4yMTUsMC41MTA2MiAtMC4zOTkxMywwLjkzODExIC0wLjYxNDEzLDEuNDQ4NzNsLTU4Ljg1NzMsNTkuMDcyNTFjLTQuMTY1NjIsNC4xOTI1IC00LjE2NTYzLDExLjAxODU0IDAsMTUuMjM3OTJsMy43ODk4LDMuODE2MDRjNC4xOTI1LDQuMTkyNSAxMC45MzU4Miw0LjIxNzQ5IDE1LjEwMTQ0LDAuMDc4NzRjMC4wNTM3NSwtMC4wNTM3NSAwLjEwOTYsLTAuMDUzNzUgMC4xMzY0NywwbDE2Ljk4NTg0LDE3LjA5NjA3YzMuMTcxMjUsMy4xNDQzNyA4LjI1MTI1LDMuMTQ0MzcgMTEuMzk1NjMsMGw3LjU3NDM0LC03LjYzMjA4YzMuMTQ0MzcsLTMuMTcxMjUgMy4xNDQzNywtOC4yODIxMiAwLC0xMS40NTMzN2wtMS44NzkxNSwtMS45MDU0bDMuNzM3MywtMy43NjM1NWMwLjAyNjg4LDAuMDI2ODcgMC4wNTEyMywwLjAyNjI0IDAuMTA0OTgsMC4wMjYyNGMyLjEyMzEzLDIuMDQyNSA1LjQ1NzczLDIuMDE3NTEgNy41MjcxLC0wLjA3ODc0bDMuNzg5NzksLTMuNzg5NzljMi4xMjMxMywtMi4wOTYyNSAyLjEyMjQ5LC01LjUzNTgzIDAuMDI2MjQsLTcuNjMyMDhoLTAuMDI2MjRsLTE1LjA4MDQ0LC0xNS4yMTE2N3YtMC4xMzY0N2wyMi40OTczMSwtMjIuNjU0NzhjMC41MTA2MywtMC4yMTUgMC45MzgxMSwtMC4zOTk3NyAxLjQ0ODczLC0wLjU4Nzg5aDQuMTkzOTdsNDEuNTc3NTEsLTAuMDMxNDljNi4zMTU2MywtMC4wMjY4NyAxMi4xNDgzNCwtMi4wMTU2MiAxNi45ODU4NCwtNS4zNzVjNy43NjY4NywtNS40Mjg3NSAxMi44NzA2LC0xNC40ODM1MyAxMi44NzA2LC0yNC43MjI5YzAsLTE2LjY2MjUgLTEzLjQxMTY4LC0zMC4xMjg3NiAtMjkuOTY2NjgsLTMwLjE1NTY0aC0zLjQxMTg2di0yLjQ3MjI5YzAsLTE2LjYzNTYyIC0xMi45Mjg3NiwtMzAuOTMxNDUgLTI5LjQ4Mzc2LC0zMS4yMDAyek0xMDQuMzI0MzQsNS4zNTRjMTMuMTA3OTYsMC41OTUzNCAyMy41NDcxMiwxMS40NDcwNyAyMy41NDcxMiwyNC43NzUzOXYzLjU0MzA5aC0wLjgzNDZjLTEuNDc4MTIsLTAuMTA3NSAtMi43Njg5NiwwLjk5NDE3IC0yLjg3NjQ2LDIuNDcyMjljLTAuMTM0MzcsMS40NzgxMiAwLjk5NDE3LDIuNzk1MjEgMi40NzIyOSwyLjkwMjcxaDAuNDA0MTdsMC44MDgzNSwtMC4wNTI0OWg4Ljg2NTZjMTMuNTk4NzUsMCAyNC42NDQxNywxMS4xMjY4OCAyNC42NDQxNiwyNC44MzMxM2MwLDguMDA4NzUgLTMuNzg4MzIsMTUuMTMyMSAtOS42NzM5NSwxOS42NDcxYy00LjEzODc1LDMuMjI1IC05LjMyNjQ2LDUuMTMzNTQgLTE0Ljk3MDIxLDUuMTMzNTRsLTQwLjIyODUyLC0wLjA4Mzk4aC03LjIwMTY2Yy0wLjc3OTM4LDAgLTEuNTM1ODYsMC4yOTY0NyAtMi4wNzMzNiwwLjg2MDg0bC0yNS45MzAxOCwyNS45ODc5MmMtMC40ODM3NSwwLjUxMDYyIC0wLjc1NTIzLDEuMTg1MDIgLTAuNzgyMSwxLjkxMDY0YzAsMC42OTg3NSAwLjI5ODM1LDEuMzk0NzcgMC43ODIxLDEuOTA1MzlsMTcuMDEyMDgsMTcuMDk2MDd2MC4xMzEyM2wtMy42NTg1NywzLjcxMTA2aC0wLjEzMTIzYy0xLjAyMTI1LC0xLjAyMTI1IC0yLjM2NzMxLC0xLjUwNjQ3IC0zLjcxMTA2LC0xLjUwNjQ3Yy0xLjM3MDYyLDAgLTIuNzQxNjcsMC41MTA4MyAtMy43ODk3OSwxLjU1ODk2bC0zLjk0NzI3LDMuNzg5NzljLTIuMDY5MzgsMi4xMjMxMiAtMi4wNjkzOCw1LjUwODk2IDAsNy42MzIwOGwxLjg1MjksMS44NTI5YzEuMDc1LDEuMTAxODggMS4wNzUsMi44NTA2NCAwLDMuOTUyNTFsLTcuNDc0NjEsNy40OTU2MWMtMS4wNzUsMS4wNzUgLTIuODE5NzgsMS4wNzUgLTMuODk0NzgsMGwtMTguODkxMjQsLTE5LjAwMTQ3Yy0wLjQ4Mzc1LC0wLjUxMDYyIC0xLjE4NTAyLC0wLjgyOTM0IC0xLjkxMDY0LC0wLjgyOTM0Yy0wLjY5ODc1LDAgLTEuMzk0NzcsMC4zMTg3MiAtMS45MDU0LDAuODI5MzRsLTEuOTEwNjQsMS44ODQ0Yy0yLjA5NjI1LDIuMDY5MzcgLTUuNDgzMzQsMi4wNjkzNyAtNy41Nzk1OSwwbC0zLjY3OTU3LC0zLjgxNjA0Yy0yLjA5NjI1LC0yLjA5NjI1IC0yLjA5NjI1LC01LjUwODk1IDAsLTcuNjMyMDhsNTkuOTAxODYsLTYwLjMxMTI4YzAuNjQ1LC0wLjY0NSAwLjk5NzMyLC0xLjUwMTQzIDAuOTk3MzIsLTIuMzg4M3YtNDIuNTk1ODNjMCwtMTMuMjQ5MzcgOS45Njk1NywtMjQuODYxNDcgMjMuMTExNDUsLTI1LjY2NzcyYzAuODk1MjcsLTAuMDUzNzUgMS43ODIxNCwtMC4wNjA2OSAyLjY1NjAxLC0wLjAyMXpNMTA1Ljg5MzgsMzIuMjVjLTcuODUyODcsMC4wNTEwNiAtMTQuMjg5MjcsNi40NzkxNCAtMTQuMzQwMzMsMTQuMzUwODNsLTAuMTc4NDcsMjQuNTYwMThjMCwxLjEwNDU2IDAuNDEyMjgsMi4xMzQ1OSAxLjE4NjI4LDIuODgxNzFjMC43NzEzMSwwLjc3MTMxIDEuODAxMzQsMS4yMDcyOCAyLjg4MTcxLDEuMjA3MjhoMC4wMjYyNWwyNC41NjU0MywtMC4yMzA5NmMzLjkzOTg4LC0wLjAyNjg4IDcuNDkyMzcsLTEuNjQyNCAxMC4wOTM4NywtNC4yNDEyMWMyLjYwMTUsLTIuNTk2MTMgNC4yMjQ4MywtNi4xNzU3NSA0LjI1MTcxLC0xMC4wODMzOGMwLjAyMTUsLTMuODA4MTkgLTEuNDQ4OTgsLTcuMzg1MTIgLTQuMTI1NzMsLTEwLjA4MzM3Yy0yLjY3Njc1LC0yLjY0OTg4IC02LjIzMTc3LC00LjEwOTk5IC05Ljk4ODg5LC00LjEwOTk5aC0wLjA5OTczbC0wLjA1MjQ5LC0wLjA1MjQ5YzAuMDI2ODgsLTMuODA1NSAtMS40NDEwNSwtNy4zODI0NCAtNC4xMjA0OCwtMTAuMDgzMzdjLTIuNjc5NDQsLTIuNjUyNTYgLTYuMjA5NTEsLTQuMTE1MjMgLTEwLjAyMDM4LC00LjExNTIzek0xMDUuOTIwMDQsMzcuMzk0MDRoMC4wNzg3NGMyLjM5NDU2LDAgNC42NjEyNiwwLjkyNjAxIDYuMzM1NTcsMi42MjQ1MWMxLjcyNTM4LDEuNjk4NSAyLjY1MTM5LDMuOTYwODcgMi42MjQ1MSw2LjQwMzgxdjIuNTM1MjhjMCwxLjQ4MzUgMS4yMDQsMi42ODc1IDIuNjg3NSwyLjY4NzVoMi41NDA1M2gwLjA1MjQ5YzIuNDIxNDQsMCA0LjY4NDk0LDAuOTI2MDEgNi4zNTY1NywyLjYyNDUxYzEuNjk4NSwxLjY5ODUgMi42MjQ1MSwzLjk2MTUgMi42MjQ1MSw2LjM3NzU2Yy0wLjA1MTA2LDUuMDY1OTQgLTQuMTY5NTMsOS4xODE5NyAtOS4yNDM1Myw5LjIzMzAzbC0yMy40NTI2NCwwLjE5OTQ2bDAuMTc4NDcsLTIzLjQ1MjY0YzAuMDI2ODcsLTUuMDY1OTQgNC4xNzAxNiwtOS4yMDg4NSA5LjIxNzI4LC05LjIzMzAzek02MC4xNjQzMSw2Mi4wMjI0NmMtMC42OTUzOSwtMC4wMTQ3OCAtMS40MDA2MSwwLjIzNTgzIC0xLjk0MjE0LDAuNzU1ODZjLTEuMDgzMDYsMS4wNDAwNiAtMS4xMTg4LDIuNzU5MjIgLTAuMDc4NzMsMy44NDIyOGwzLjkyNjI3LDMuODIxMjljMS4xMjYwNiwwLjk2NDgxIDIuODI0OTgsMC44MzIxMSAzLjc4OTc5LC0wLjI5Mzk1YzAuODYyNjksLTEuMDA1MTIgMC44NjI2OSwtMi40OTA3MiAwLC0zLjQ5NTg1bC0zLjc4OTc5LC0zLjc4OTc5Yy0wLjUyMDAzLC0wLjU0MTUzIC0xLjIxLC0wLjgyNTA2IC0xLjkwNTM5LC0wLjgzOTg0ek01MC42MDA1OSw3MS43MTIxNmMtMC42ODU5OCwwLjA1MzA4IC0xLjM1NDc1LDAuMzY2MDUgLTEuODM3MTYsMC45MjkwOGMtMC44NjI2OSwxLjAwNTEyIC0wLjg2MjY5LDIuNDkwNzIgMCwzLjQ5NTg1bDMuNzg5OCwzLjc4OTc5YzEuMTI2MDYsMC45NjQ4MSAyLjgyNDk4LDAuODMyMTIgMy43ODk3OSwtMC4yOTM5NWMwLjg2MjY5LC0xLjAwNTEzIDAuODYyNjksLTIuNDkwNzIgMCwtMy40OTU4NWwtMy43ODk3OSwtMy43ODk3OWMtMC41NjMwMywtMC40ODI0MSAtMS4yNjY2NSwtMC42ODgyMSAtMS45NTI2NCwtMC42MzUxM3pNNDEuMDI2MzcsODEuNDQ5MWMtMC42NzQ5LDAuMTMxMzUgLTEuMzAxMjEsMC41MjM2IC0xLjcxNjQzLDEuMTM5MDRjLTAuNjIwODEsMC45MTkxMyAtMC42MTA1NywyLjEyMjg3IDAuMDIxLDMuMDMzOTNsMy43MTEwNiwzLjgxNjA0YzEuMTI2MDYsMC45NjQ4MSAyLjgyNDk4LDAuODM3MzcgMy43ODk3OSwtMC4yODg3YzAuODYyNjksLTEuMDA1MTMgMC44NjI2OSwtMi40OTU5NyAwLC0zLjUwMTFsLTMuNzg5NzksLTMuNzg0NTVjLTAuNjE1NDQsLTAuNDE1MjIgLTEuMzQwNzMsLTAuNTQ2MDIgLTIuMDE1NjIsLTAuNDE0Njd6TTMxLjU5OTEyLDkwLjcwODM3Yy0wLjY4NTk4LDAuMDUzMDggLTEuMzU0NzUsMC4zNzEyOSAtMS44MzcxNiwwLjkzNDMzYy0wLjg2MjY5LDEuMDA1MTMgLTAuODYyNjksMi40OTA3MyAwLDMuNDk1ODVsMy43ODk3OSwzLjc4OTc5YzEuMTI2MDYsMC45NjQ4MSAyLjgyNDk4LDAuODMyMTIgMy43ODk3OSwtMC4yOTM5NWMwLjg2MjY5LC0xLjAwNTEzIDAuODYyNjksLTIuNDkwNzIgMCwtMy40OTU4NWwtMy43ODk3OSwtMy43ODk4Yy0wLjU2MzAzLC0wLjQ4MjQxIC0xLjI2NjY1LC0wLjY5MzQ2IC0xLjk1MjY0LC0wLjY0MDM4ek0yMi4wODI2NCwxMDAuMjI0ODVjLTAuNjg1OTgsMC4wNTMwOCAtMS4zNDk1LDAuMzY2MDUgLTEuODMxOTEsMC45MjkwOGMtMC44NjI2OSwxLjAwNTEzIC0wLjg2MjY5LDIuNDkwNzIgMCwzLjQ5NTg1bDMuNzg5OCwzLjc4OTc5YzEuMTI2MDYsMC45NjQ4MSAyLjgyNDk4LDAuODMyMTIgMy43ODk4LC0wLjI5Mzk1YzAuODYyNjksLTEuMDA1MTMgMC44NjI2OSwtMi40OTA3MiAwLC0zLjQ5NTg1bC0zLjc4OTgsLTMuNzg5NzljLTAuNTYzMDMsLTAuNDgyNDEgLTEuMjcxOSwtMC42ODgyMSAtMS45NTc4OSwtMC42MzUxM3pNMTIuNTk3NjYsMTA5LjY4MzU5Yy0wLjY4NTk4LDAuMDUzMDggLTEuMzQ5NSwwLjM2NjA1IC0xLjgzMTkxLDAuOTI5MDhjLTAuODYyNjksMS4wMDUxMyAtMC44NjI2OSwyLjQ5NTk4IDAsMy41MDExbDMuNzg0NTUsMy44MTYwNGMxLjEyNjA2LDAuOTY0ODEgMi44MjQ5OCwwLjgzMjEyIDMuNzg5OCwtMC4yOTM5NWMwLjg2MjY5LC0xLjAwNTEzIDAuODYyNjksLTIuNDkwNzIgMCwtMy40OTU4NWwtMy43ODk4LC0zLjgxNjA0Yy0wLjU2MzAzLC0wLjQ4MjQxIC0xLjI2NjY1LC0wLjY5MzQ2IC0xLjk1MjY0LC0wLjY0MDM4ek0zLjA4NjQzLDExOS4yMDAwN2MtMC42ODU5OCwwLjA1MzA4IC0xLjM1NDc1LDAuMzY2MDUgLTEuODM3MTYsMC45MjkwOGMtMC44NjI2OSwxLjAwNTEzIC0wLjg2MjY5LDIuNDkwNzIgMCwzLjQ5NTg1bDMuNzg5NzksMy43ODk3OWMxLjEyNjA2LDAuOTY0ODEgMi44MjQ5OCwwLjgzMjEyIDMuNzg5NzksLTAuMjkzOTVjMC44NjI2OSwtMS4wMDUxMyAwLjg2MjY5LC0yLjQ5MDcyIDAsLTMuNDk1ODVoMC4wMjYyNWwtMy44MTYwNCwtMy43ODk3OWMtMC41NjMwMywtMC40ODI0MSAtMS4yNjY2NSwtMC42ODgyMSAtMS45NTI2NCwtMC42MzUxM3pNNTUuNTM0NjcsMTIyLjgwNjE1Yy0wLjQ4Njc3LDAuMDEyNDMgLTAuOTcxNjEsMC4xNjAyIC0xLjM5NjI0LDAuNDM1NjdsLTE1LjIxMTY3LDE1LjIxMTY3Yy0xLjI0NDMxLDAuODA4OTQgLTEuNTk2MjksMi40NzIgLTAuNzg3MzUsMy43MTYzMWMwLjgwODk0LDEuMjQ0MzEgMi40NzIsMS41OTYyOSAzLjcxNjMxLDAuNzg3MzVjMC4zNTQ3NSwtMC4yMzExMiAwLjY1MTIxLC0wLjUzNzMzIDAuODYwODQsLTAuOTAyODNsMTUuMjExNjcsLTE1LjIxMTY3YzAuNzQ0NDQsLTEuMjg0NjMgMC4zMDMwNiwtMi45Mjk4OCAtMC45ODE1NywtMy42NzQzMmMtMC40MzY3MiwtMC4yNTI2MyAtMC45MjUyMSwtMC4zNzQ2MSAtMS40MTE5OSwtMC4zNjIxOHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==",
    },
  ];
  
  return (
    <section className="pmg" id="pmg">
      <div>
        <Row>
          <Col>
            <div className="pmg-container">
              <h2>
                Votre projet en 4 étapes
              </h2>
              <p>
                4 étapes qui vous séparent de la réussite de votre projet.
              </p>
              <div className="pmg-wrapper">
                {
                  steps.map((step, index) => {
                    return (
                      <PMGCard
                        key={index}
                        {...step}
                      />
                    )
                  })
                }
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <img className="background-image-left-pmg" src={colorSharp2} />
    </section>
  )
}