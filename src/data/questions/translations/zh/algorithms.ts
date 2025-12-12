// Chinese translations for Algorithms questions
// 算法问题的中文翻译

import type { CategoryTranslations } from '../index';

export const algorithms: CategoryTranslations = {
  // ===== 级别1: 非常简单 =====
  alg1: {
    text: '什么是算法？',
    correct: '解决问题的步骤',
    wrong: ['编程语言', '数据类型', '变量'],
  },
  alg2: {
    text: '什么是排序？',
    correct: '按顺序排列元素',
    wrong: ['随机排列', '删除元素', '添加元素'],
  },
  alg3: {
    text: '什么是搜索？',
    correct: '在数据中查找元素',
    wrong: ['删除元素', '排序元素', '添加元素'],
  },
  alg4: {
    text: '什么是线性搜索？',
    correct: '逐个检查每个元素',
    wrong: ['跳过元素', '随机检查', '从中间开始'],
  },
  alg5: {
    text: '什么是二分搜索？',
    correct: '在排序数组中分半搜索',
    wrong: ['逐个搜索', '随机搜索', '从末尾搜索'],
  },
  alg6: {
    text: '二分搜索需要什么条件？',
    correct: '数组必须排序',
    wrong: ['数组必须未排序', '数组必须为空', '数组必须有重复'],
  },
  alg7: {
    text: '什么是冒泡排序？',
    correct: '比较相邻元素并交换',
    wrong: ['随机交换', '不交换', '只比较第一个'],
  },
  alg8: {
    text: '什么是递归？',
    correct: '函数调用自身',
    wrong: ['函数调用其他函数', '循环', '条件语句'],
  },
  alg9: {
    text: '递归需要什么？',
    correct: '基本情况',
    wrong: ['无限循环', '无条件', '无返回'],
  },
  alg10: {
    text: '什么是时间复杂度？',
    correct: '算法运行时间的度量',
    wrong: ['内存使用', '代码行数', '变量数量'],
  },
  alg11: {
    text: 'O(1)表示什么？',
    correct: '常数时间',
    wrong: ['线性时间', '二次时间', '对数时间'],
  },
  alg12: {
    text: 'O(n)表示什么？',
    correct: '线性时间',
    wrong: ['常数时间', '二次时间', '对数时间'],
  },
  alg13: {
    text: 'O(n²)表示什么？',
    correct: '二次时间',
    wrong: ['线性时间', '常数时间', '对数时间'],
  },
  alg14: {
    text: 'O(log n)表示什么？',
    correct: '对数时间',
    wrong: ['线性时间', '常数时间', '二次时间'],
  },
  alg15: {
    text: '哪个更快，O(n)还是O(n²)？',
    correct: 'O(n)',
    wrong: ['O(n²)', '一样快', '取决于n'],
  },
  alg16: {
    text: '什么是空间复杂度？',
    correct: '算法使用的内存',
    wrong: ['运行时间', '代码行数', '变量数量'],
  },
  alg17: {
    text: '什么是迭代？',
    correct: '使用循环重复',
    wrong: ['使用递归', '不重复', '随机执行'],
  },
  alg18: {
    text: '什么是分治法？',
    correct: '将问题分成更小的部分',
    wrong: ['一次解决全部', '忽略问题', '随机解决'],
  },
  alg19: {
    text: '什么是贪心算法？',
    correct: '每步选择局部最优',
    wrong: ['选择全局最优', '随机选择', '不选择'],
  },
  alg20: {
    text: '什么是暴力算法？',
    correct: '尝试所有可能的解',
    wrong: ['只尝试一个解', '不尝试', '随机尝试'],
  },
  alg21: {
    text: '线性搜索的时间复杂度是多少？',
    correct: 'O(n)',
    wrong: ['O(1)', 'O(log n)', 'O(n²)'],
  },
  alg22: {
    text: '二分搜索的时间复杂度是多少？',
    correct: 'O(log n)',
    wrong: ['O(n)', 'O(1)', 'O(n²)'],
  },
  alg23: {
    text: '冒泡排序的时间复杂度是多少？',
    correct: 'O(n²)',
    wrong: ['O(n)', 'O(log n)', 'O(1)'],
  },
  alg24: {
    text: '什么是稳定排序？',
    correct: '保持相等元素的相对顺序',
    wrong: ['改变顺序', '删除重复', '随机排序'],
  },
  alg25: {
    text: '冒泡排序是稳定的吗？',
    correct: '是',
    wrong: ['否', '有时', '取决于数据'],
  },
  alg26: {
    text: '什么是原地排序？',
    correct: '不需要额外空间',
    wrong: ['需要额外空间', '不排序', '随机排序'],
  },
  alg27: {
    text: '什么是选择排序？',
    correct: '选择最小元素放到正确位置',
    wrong: ['选择最大元素', '随机选择', '不选择'],
  },
  alg28: {
    text: '什么是插入排序？',
    correct: '将元素插入到正确位置',
    wrong: ['删除元素', '随机插入', '不插入'],
  },
  alg29: {
    text: '插入排序对什么数据最好？',
    correct: '几乎排序的数据',
    wrong: ['完全随机', '逆序', '空数组'],
  },
  alg30: {
    text: '什么是归并排序？',
    correct: '分割然后合并排序',
    wrong: ['只分割', '只合并', '不分割'],
  },
  alg31: {
    text: '归并排序的时间复杂度是多少？',
    correct: 'O(n log n)',
    wrong: ['O(n²)', 'O(n)', 'O(log n)'],
  },
  alg32: {
    text: '什么是快速排序？',
    correct: '选择基准分区排序',
    wrong: ['不选择基准', '随机排序', '不分区'],
  },
  alg33: {
    text: '快速排序的平均时间复杂度是多少？',
    correct: 'O(n log n)',
    wrong: ['O(n²)', 'O(n)', 'O(log n)'],
  },
  alg34: {
    text: '快速排序的最坏时间复杂度是多少？',
    correct: 'O(n²)',
    wrong: ['O(n log n)', 'O(n)', 'O(log n)'],
  },
  alg35: {
    text: '什么是基准元素？',
    correct: '用于分区的参考元素',
    wrong: ['最大元素', '最小元素', '中间元素'],
  },
  alg36: {
    text: '什么是堆排序？',
    correct: '使用堆数据结构排序',
    wrong: ['使用栈', '使用队列', '使用数组'],
  },
  alg37: {
    text: '堆排序的时间复杂度是多少？',
    correct: 'O(n log n)',
    wrong: ['O(n²)', 'O(n)', 'O(log n)'],
  },
  alg38: {
    text: '什么是计数排序？',
    correct: '计算每个元素出现次数',
    wrong: ['比较元素', '交换元素', '删除元素'],
  },
  alg39: {
    text: '计数排序适合什么数据？',
    correct: '范围有限的整数',
    wrong: ['任何数据', '浮点数', '字符串'],
  },
  alg40: {
    text: '什么是基数排序？',
    correct: '按位数排序',
    wrong: ['按值排序', '随机排序', '不排序'],
  },
  alg41: {
    text: '什么是桶排序？',
    correct: '将元素分配到桶中',
    wrong: ['不分配', '随机分配', '删除元素'],
  },
  alg42: {
    text: '什么是深度优先搜索？',
    correct: '先探索深度再回溯',
    wrong: ['先探索广度', '随机探索', '不探索'],
  },
  alg43: {
    text: '什么是广度优先搜索？',
    correct: '先探索同层再深入',
    wrong: ['先探索深度', '随机探索', '不探索'],
  },
  alg44: {
    text: 'DFS使用什么数据结构？',
    correct: '栈',
    wrong: ['队列', '堆', '数组'],
  },
  alg45: {
    text: 'BFS使用什么数据结构？',
    correct: '队列',
    wrong: ['栈', '堆', '数组'],
  },
  alg46: {
    text: '什么是动态规划？',
    correct: '存储子问题结果避免重复计算',
    wrong: ['不存储结果', '随机计算', '只计算一次'],
  },
  alg47: {
    text: '动态规划需要什么性质？',
    correct: '最优子结构',
    wrong: ['无子结构', '随机结构', '线性结构'],
  },
  alg48: {
    text: '什么是记忆化？',
    correct: '缓存函数结果',
    wrong: ['删除结果', '不缓存', '随机缓存'],
  },
  alg49: {
    text: '什么是回溯算法？',
    correct: '尝试并撤销不成功的选择',
    wrong: ['不撤销', '随机选择', '只尝试一次'],
  },
  alg50: {
    text: '回溯常用于什么问题？',
    correct: '组合问题',
    wrong: ['排序问题', '搜索问题', '数学问题'],
  },

  // ===== 级别2-4: 简单到普通 =====
  alg51: {
    text: '什么是哈希函数？',
    correct: '将数据映射到固定大小',
    wrong: ['增加数据大小', '删除数据', '复制数据'],
  },
  alg52: {
    text: '什么是哈希冲突？',
    correct: '不同键映射到相同位置',
    wrong: ['相同键映射到不同位置', '无映射', '随机映射'],
  },
  alg53: {
    text: '如何解决哈希冲突？',
    correct: '链地址法或开放寻址',
    wrong: ['忽略冲突', '删除数据', '重新哈希'],
  },
  alg54: {
    text: '什么是Dijkstra算法？',
    correct: '最短路径算法',
    wrong: ['最长路径', '随机路径', '无路径'],
  },
  alg55: {
    text: 'Dijkstra算法适用于什么图？',
    correct: '非负权重图',
    wrong: ['负权重图', '无权重图', '任何图'],
  },
  alg56: {
    text: '什么是Bellman-Ford算法？',
    correct: '可处理负权重的最短路径',
    wrong: ['只处理正权重', '最长路径', '无路径'],
  },
  alg57: {
    text: '什么是Floyd-Warshall算法？',
    correct: '所有点对最短路径',
    wrong: ['单源最短路径', '最长路径', '无路径'],
  },
  alg58: {
    text: '什么是最小生成树？',
    correct: '连接所有顶点的最小权重树',
    wrong: ['最大权重树', '不连接所有顶点', '随机树'],
  },
  alg59: {
    text: '什么是Prim算法？',
    correct: '最小生成树算法',
    wrong: ['最短路径', '排序', '搜索'],
  },
  alg60: {
    text: '什么是Kruskal算法？',
    correct: '最小生成树算法',
    wrong: ['最短路径', '排序', '搜索'],
  },
  alg61: {
    text: 'Prim和Kruskal的区别？',
    correct: 'Prim从顶点开始，Kruskal从边开始',
    wrong: ['完全相同', '相反', '无区别'],
  },
  alg62: {
    text: '什么是拓扑排序？',
    correct: '有向无环图的线性排序',
    wrong: ['任何图的排序', '随机排序', '无排序'],
  },
  alg63: {
    text: '拓扑排序需要什么图？',
    correct: '有向无环图',
    wrong: ['有环图', '无向图', '任何图'],
  },
  alg64: {
    text: '什么是并查集？',
    correct: '管理不相交集合的数据结构',
    wrong: ['管理相交集合', '排序结构', '搜索结构'],
  },
  alg65: {
    text: '并查集的主要操作是什么？',
    correct: '查找和合并',
    wrong: ['排序和搜索', '添加和删除', '读取和写入'],
  },
  alg66: {
    text: '什么是路径压缩？',
    correct: '优化并查集查找操作',
    wrong: ['增加路径', '删除路径', '随机路径'],
  },
  alg67: {
    text: '什么是KMP算法？',
    correct: '字符串匹配算法',
    wrong: ['排序算法', '搜索算法', '图算法'],
  },
  alg68: {
    text: 'KMP的时间复杂度是多少？',
    correct: 'O(n+m)',
    wrong: ['O(nm)', 'O(n²)', 'O(m²)'],
  },
  alg69: {
    text: '什么是Rabin-Karp算法？',
    correct: '使用哈希的字符串匹配',
    wrong: ['不使用哈希', '排序算法', '图算法'],
  },
  alg70: {
    text: '什么是A*算法？',
    correct: '启发式最短路径搜索',
    wrong: ['非启发式搜索', '最长路径', '随机搜索'],
  },
  alg71: {
    text: 'A*使用什么函数？',
    correct: 'f(n) = g(n) + h(n)',
    wrong: ['只用g(n)', '只用h(n)', '无函数'],
  },
  alg72: {
    text: '什么是启发式函数？',
    correct: '估计到目标的距离',
    wrong: ['精确距离', '随机值', '无估计'],
  },
  alg73: {
    text: '什么是NP问题？',
    correct: '可在多项式时间验证的问题',
    wrong: ['可在多项式时间解决', '无法验证', '无法解决'],
  },
  alg74: {
    text: '什么是NP完全问题？',
    correct: 'NP中最难的问题',
    wrong: ['最简单的问题', 'P问题', '无解问题'],
  },
  alg75: {
    text: '什么是P问题？',
    correct: '可在多项式时间解决的问题',
    wrong: ['指数时间', '无法解决', '随机时间'],
  },

  // ===== 级别5-8: 困难到教授 =====
  alg76: {
    text: '什么是摊销分析？',
    correct: '分析操作序列的平均成本',
    wrong: ['分析单个操作', '最坏情况', '最好情况'],
  },
  alg77: {
    text: '什么是主定理？',
    correct: '分析分治算法复杂度',
    wrong: ['分析迭代算法', '分析贪心算法', '分析动态规划'],
  },
  alg78: {
    text: '什么是红黑树？',
    correct: '自平衡二叉搜索树',
    wrong: ['不平衡树', '普通二叉树', '堆'],
  },
  alg79: {
    text: '红黑树的插入复杂度是多少？',
    correct: 'O(log n)',
    wrong: ['O(n)', 'O(1)', 'O(n²)'],
  },
  alg80: {
    text: '什么是AVL树？',
    correct: '高度平衡的二叉搜索树',
    wrong: ['不平衡树', '普通二叉树', '堆'],
  },
  alg81: {
    text: 'AVL树的平衡因子是多少？',
    correct: '-1, 0, 或 1',
    wrong: ['任何值', '只有0', '只有1'],
  },
  alg82: {
    text: '什么是B树？',
    correct: '多路平衡搜索树',
    wrong: ['二叉树', '不平衡树', '堆'],
  },
  alg83: {
    text: 'B树常用于什么？',
    correct: '数据库和文件系统',
    wrong: ['内存排序', '图形处理', '网络通信'],
  },
  alg84: {
    text: '什么是跳表？',
    correct: '多层链表实现快速搜索',
    wrong: ['单层链表', '数组', '树'],
  },
  alg85: {
    text: '跳表的搜索复杂度是多少？',
    correct: 'O(log n)',
    wrong: ['O(n)', 'O(1)', 'O(n²)'],
  },
  alg86: {
    text: '什么是布隆过滤器？',
    correct: '概率数据结构测试成员资格',
    wrong: ['精确数据结构', '排序结构', '搜索结构'],
  },
  alg87: {
    text: '布隆过滤器有什么特点？',
    correct: '可能有假阳性，无假阴性',
    wrong: ['无假阳性', '有假阴性', '完全精确'],
  },
  alg88: {
    text: '什么是线段树？',
    correct: '区间查询的树结构',
    wrong: ['点查询', '排序结构', '图结构'],
  },
  alg89: {
    text: '线段树的查询复杂度是多少？',
    correct: 'O(log n)',
    wrong: ['O(n)', 'O(1)', 'O(n²)'],
  },
  alg90: {
    text: '什么是树状数组？',
    correct: '高效前缀和数据结构',
    wrong: ['后缀和', '排序结构', '图结构'],
  },
  alg91: {
    text: '什么是后缀数组？',
    correct: '所有后缀的排序数组',
    wrong: ['前缀数组', '随机数组', '未排序数组'],
  },
  alg92: {
    text: '什么是后缀树？',
    correct: '所有后缀的压缩字典树',
    wrong: ['前缀树', '普通树', '堆'],
  },
  alg93: {
    text: '什么是网络流？',
    correct: '图中从源到汇的流量',
    wrong: ['无流量', '随机流量', '反向流量'],
  },
  alg94: {
    text: '什么是Ford-Fulkerson算法？',
    correct: '最大流算法',
    wrong: ['最小流', '最短路径', '排序'],
  },
  alg95: {
    text: '什么是二分图匹配？',
    correct: '二分图中的最大匹配',
    wrong: ['最小匹配', '无匹配', '随机匹配'],
  },
  alg96: {
    text: '什么是匈牙利算法？',
    correct: '二分图最大匹配算法',
    wrong: ['最短路径', '排序', '搜索'],
  },
  alg97: {
    text: '什么是凸包？',
    correct: '包含所有点的最小凸多边形',
    wrong: ['最大多边形', '凹多边形', '随机多边形'],
  },
  alg98: {
    text: '什么是Graham扫描？',
    correct: '凸包算法',
    wrong: ['排序算法', '搜索算法', '图算法'],
  },
  alg99: {
    text: '什么是快速傅里叶变换？',
    correct: '高效计算离散傅里叶变换',
    wrong: ['慢速变换', '无变换', '随机变换'],
  },
  alg100: {
    text: 'FFT的时间复杂度是多少？',
    correct: 'O(n log n)',
    wrong: ['O(n²)', 'O(n)', 'O(log n)'],
  },
};

export default algorithms;
