export const glitcheUtils = {
  createSkillsDot() {
    const skills_dotted = document.querySelectorAll<HTMLElement>(".skills .progress");
    skills_dotted.forEach((skill) => {
      skill.insertAdjacentHTML(
        "beforeend",
        '<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
      );
      const percentage = skill.getElementsByClassName("percentage")[0] as HTMLElement;
      percentage.insertAdjacentHTML(
        "beforeend",
        '<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
      );
      const width = skill.clientWidth,
        da = percentage.getElementsByClassName("da")[0] as HTMLElement;
      da.style.width = `${width}px`;
    });
  },
  dotResize() {
    window.addEventListener("resize", () => {
      const skills_dotted = document.querySelectorAll<HTMLElement>(
        ".skills-list.dotted .progress"
      );
      skills_dotted.forEach((skill) => {
        const width = skill.clientWidth,
          da = skill.getElementsByClassName("da")[0] as HTMLElement;
        da.style.width = `${width + 1}px`;
      });
    });
  },
};
