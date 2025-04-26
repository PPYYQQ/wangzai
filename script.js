const data = [
    {
      name: "Guangyuan Jiang",
      score: 4,
      email: "jgy@stu.pku.edu.cn",
      homepage: "https://jiang.gy/"
    },
    {
      name: "Yichao Zhou",
      score: 4,
      email: "2100013086@stu.pku.edu.cn",
      homepage: "https://pku.ai/author/yichao-zhou/"
    },
    {
      name: "Hongjie Li",
      score: 2,
      email: "lihongjie@stu.pku.edu.cn",
      homepage: "https://awfuact.github.io/"
    },
    {
      name: "Yongqian Peng",
      score: 2,
      email: "yqpeng@stu.pku.edu.cn",
      homepage: "https://ppyyqq.github.io/"
    },
    {
      name: "Qianxu Wang",
      score: 3,
      email: "helloqxwang@gmail.com",
      homepage: "https://qianxu.wang"
    },
    {
      name: "Yifei Wang",
      score: 2,
      email: "wyf181030@stu.pku.edu.cn",
      homepage: "https://a-little-hoof.github.io/"
    }
  ];
  
// Sort by score descending
data.sort((a, b) => b.score - a.score);

// Find highest score
const highestScore = data[0].score;

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
  if (item.score === highestScore) {
    avatarFile = `./images/${item.name}_wz.jpg`;
  } else {
    avatarFile = `./images/${item.name}.jpg`;
  }

  li.innerHTML = `
    <img src="${avatarFile}" alt="${item.name}" class="avatar">
    <div class="name">#${realRank} ${item.name}</div>
    <div class="score">Score: ${item.score}</div>
    <div class="links">
      <a href="mailto:${item.email}">📧 Email</a>
      <a href="${item.homepage}" target="_blank">🏠 Website</a>
    </div>
  `;

  leaderboard.appendChild(li);
});