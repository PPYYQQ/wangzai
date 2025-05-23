const data = [
    {
      name: "Yichao Zhou",
      score: 4,
      email: "2100013086@stu.pku.edu.cn",
      homepage: "https://pku.ai/author/yichao-zhou/",
      identifier: "zyc"
    },
    {
      name: "Guangyuan Jiang",
      score: 5,
      email: "jgy@stu.pku.edu.cn",
      homepage: "https://jiang.gy/",
      identifier: "jgy"
    },
    {
      name: "Hongjie Li",
      score: 6,
      email: "lihongjie@stu.pku.edu.cn",
      homepage: "https://awfuact.github.io/",
      identifier: "lhj"
    },
    {
      name: "Yongqian Peng",
      score: 4,
      email: "yqpeng@stu.pku.edu.cn",
      homepage: "https://ppyyqq.github.io/",
      identifier: "pyq"
    },
    {
      name: "Qianxu Wang",
      score: 9,
      email: "helloqxwang@gmail.com",
      homepage: "https://qianxu.wang",
      identifier: "wqx"
    },
    {
      name: "Yifei Wang",
      score: 5,
      email: "wyf181030@stu.pku.edu.cn",
      homepage: "https://a-little-hoof.github.io/",
      identifier: "wyf"
    },
    {
      name: "Saiyao Zhang",
      score: 3,
      email: "saiyao.zsy@gmail.com",
      homepage: "https://saiyaozhang.com/",
      identifier: "zsy"
    },
    {
      name: "Yuxi Ma",
      score: 2,
      email: "mayuxi987@gmail.com",
      homepage: "https://mayuxi.com/",
      identifier: "myx"
    },
    {
      name: "Leiyao Cui",
      score: 1,
      email: "cuileiyaony@gmail.com",
      homepage: "https://lycui.com/",
      identifier: "cly"
    }
  ];
  
// Sort by score descending
data.sort((a, b) => b.score - a.score);

// Find highest score
const highestScore = data[0].score;
const lowestScore = data[data.length - 1].score;

// Render
const leaderboard = document.getElementById('leaderboard');

// 初始化排名信息
let currentRank = 1;
let lastScore = null;
let realRank = 0;

data.forEach((item, index) => {
  const li = document.createElement('li');

  // 如果分数和上一个不同，更新排名
  if (item.score !== lastScore) {
    realRank = currentRank;
  }
  lastScore = item.score;
  currentRank++;

  // 本地图片地址
  let avatarFile;
  if (item.score === highestScore || item.score === lowestScore) {
    avatarFile = `./static/images/${item.identifier}_wz.jpg`;
  } else {
    avatarFile = `./static/images/${item.identifier}.jpg`;
  }

   // 得分图标
   const scoreIcons = '<div class="score-icons">' +
   '<img src="static/images/wz.png" class="score-icon">'.repeat(item.score) +
   '</div>';

  li.innerHTML = `
    <img src="${avatarFile}" alt="${item.name}" class="avatar">
    <div class="name">#${realRank} ${item.name}</div>
    <div class="score">Score: ${item.score}</div>
          ${scoreIcons}
    <div class="links">
      <a href="mailto:${item.email}">📧 Email</a>
      <a href="${item.homepage}" target="_blank">🏠 Website</a>
    </div>
  `;

  leaderboard.appendChild(li);
});
