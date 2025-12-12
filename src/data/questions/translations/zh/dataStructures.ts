// Chinese translations for Data Structures questions
// 数据结构问题的中文翻译

import type { CategoryTranslations } from '../index';

export const dataStructures: CategoryTranslations = {
  ds1: {
    text: '什么是数据结构？',
    correct: '组织和存储数据的方式',
    wrong: ['算法', '编程语言', '操作系统'],
  },
  ds2: {
    text: '什么是数组？',
    correct: '连续内存中的元素集合',
    wrong: ['链表', '树', '图'],
  },
  ds3: {
    text: '数组的索引从几开始？',
    correct: '0',
    wrong: ['1', '-1', '任意'],
  },
  ds4: {
    text: '数组访问元素的时间复杂度？',
    correct: 'O(1)',
    wrong: ['O(n)', 'O(log n)', 'O(n²)'],
  },
  ds5: {
    text: '什么是链表？',
    correct: '节点通过指针连接',
    wrong: ['连续内存', '树结构', '图结构'],
  },
  ds6: {
    text: '单链表和双链表的区别？',
    correct: '双链表有前后指针',
    wrong: ['完全相同', '单链表更快', '双链表更慢'],
  },
  ds7: {
    text: '链表插入的时间复杂度？',
    correct: 'O(1)在已知位置',
    wrong: ['O(n)', 'O(log n)', 'O(n²)'],
  },
  ds8: {
    text: '什么是栈？',
    correct: '后进先出的数据结构',
    wrong: ['先进先出', '随机访问', '排序结构'],
  },
  ds9: {
    text: '栈的主要操作是什么？',
    correct: 'push和pop',
    wrong: ['enqueue和dequeue', 'insert和delete', 'add和remove'],
  },
  ds10: {
    text: '什么是队列？',
    correct: '先进先出的数据结构',
    wrong: ['后进先出', '随机访问', '排序结构'],
  },
  ds11: {
    text: '队列的主要操作是什么？',
    correct: 'enqueue和dequeue',
    wrong: ['push和pop', 'insert和delete', 'add和remove'],
  },
  ds12: {
    text: '什么是优先队列？',
    correct: '按优先级出队的队列',
    wrong: ['普通队列', '栈', '链表'],
  },
  ds13: {
    text: '什么是双端队列？',
    correct: '两端都可操作的队列',
    wrong: ['单端队列', '栈', '链表'],
  },
  ds14: {
    text: '什么是树？',
    correct: '层次结构的数据结构',
    wrong: ['线性结构', '网状结构', '随机结构'],
  },
  ds15: {
    text: '什么是根节点？',
    correct: '树的顶部节点',
    wrong: ['叶子节点', '子节点', '父节点'],
  },
  ds16: {
    text: '什么是叶子节点？',
    correct: '没有子节点的节点',
    wrong: ['根节点', '父节点', '内部节点'],
  },
  ds17: {
    text: '什么是二叉树？',
    correct: '每个节点最多两个子节点',
    wrong: ['任意子节点', '只有一个子节点', '没有子节点'],
  },
  ds18: {
    text: '什么是二叉搜索树？',
    correct: '左小右大的二叉树',
    wrong: ['随机排列', '左大右小', '无序'],
  },
  ds19: {
    text: '二叉搜索树搜索的平均复杂度？',
    correct: 'O(log n)',
    wrong: ['O(n)', 'O(1)', 'O(n²)'],
  },
  ds20: {
    text: '什么是平衡树？',
    correct: '高度差受限的树',
    wrong: ['不平衡树', '完全树', '满树'],
  },
  ds21: {
    text: '什么是AVL树？',
    correct: '自平衡二叉搜索树',
    wrong: ['不平衡树', '普通二叉树', '红黑树'],
  },
  ds22: {
    text: '什么是红黑树？',
    correct: '自平衡二叉搜索树',
    wrong: ['不平衡树', '普通二叉树', 'AVL树'],
  },
  ds23: {
    text: '什么是堆？',
    correct: '满足堆性质的完全二叉树',
    wrong: ['普通二叉树', '链表', '数组'],
  },
  ds24: {
    text: '什么是最大堆？',
    correct: '父节点大于子节点',
    wrong: ['父节点小于子节点', '随机排列', '无序'],
  },
  ds25: {
    text: '什么是最小堆？',
    correct: '父节点小于子节点',
    wrong: ['父节点大于子节点', '随机排列', '无序'],
  },

  ds26: {
    text: '堆常用于什么？',
    correct: '优先队列',
    wrong: ['普通队列', '栈', '链表'],
  },
  ds27: {
    text: '什么是图？',
    correct: '顶点和边的集合',
    wrong: ['树', '链表', '数组'],
  },
  ds28: {
    text: '什么是有向图？',
    correct: '边有方向的图',
    wrong: ['边无方向', '无边', '无顶点'],
  },
  ds29: {
    text: '什么是无向图？',
    correct: '边无方向的图',
    wrong: ['边有方向', '无边', '无顶点'],
  },
  ds30: {
    text: '什么是加权图？',
    correct: '边有权重的图',
    wrong: ['边无权重', '无边', '无顶点'],
  },
  ds31: {
    text: '什么是邻接矩阵？',
    correct: '用矩阵表示图',
    wrong: ['用链表表示', '用数组表示', '用树表示'],
  },
  ds32: {
    text: '什么是邻接表？',
    correct: '用链表表示图',
    wrong: ['用矩阵表示', '用数组表示', '用树表示'],
  },
  ds33: {
    text: '什么是哈希表？',
    correct: '键值对的数据结构',
    wrong: ['数组', '链表', '树'],
  },
  ds34: {
    text: '哈希表查找的平均复杂度？',
    correct: 'O(1)',
    wrong: ['O(n)', 'O(log n)', 'O(n²)'],
  },
  ds35: {
    text: '什么是哈希冲突？',
    correct: '不同键映射到相同位置',
    wrong: ['相同键不同位置', '无映射', '随机映射'],
  },
  ds36: {
    text: '链地址法解决什么？',
    correct: '哈希冲突',
    wrong: ['排序', '搜索', '插入'],
  },
  ds37: {
    text: '开放寻址法解决什么？',
    correct: '哈希冲突',
    wrong: ['排序', '搜索', '插入'],
  },
  ds38: {
    text: '什么是字典树？',
    correct: '用于字符串的树结构',
    wrong: ['二叉树', '堆', '图'],
  },
  ds39: {
    text: '字典树常用于什么？',
    correct: '自动补全和拼写检查',
    wrong: ['排序', '图遍历', '数学计算'],
  },
  ds40: {
    text: '什么是B树？',
    correct: '多路平衡搜索树',
    wrong: ['二叉树', '链表', '数组'],
  },
  ds41: {
    text: 'B树常用于什么？',
    correct: '数据库和文件系统',
    wrong: ['内存排序', '图形处理', '网络通信'],
  },
  ds42: {
    text: '什么是B+树？',
    correct: '所有数据在叶子节点的B树',
    wrong: ['普通B树', '二叉树', '红黑树'],
  },
  ds43: {
    text: '什么是跳表？',
    correct: '多层链表实现快速搜索',
    wrong: ['单层链表', '数组', '树'],
  },
  ds44: {
    text: '跳表的搜索复杂度？',
    correct: 'O(log n)',
    wrong: ['O(n)', 'O(1)', 'O(n²)'],
  },
  ds45: {
    text: '什么是并查集？',
    correct: '管理不相交集合',
    wrong: ['管理相交集合', '排序', '搜索'],
  },
  ds46: {
    text: '并查集的主要操作？',
    correct: '查找和合并',
    wrong: ['排序和搜索', '添加和删除', '读取和写入'],
  },
  ds47: {
    text: '什么是线段树？',
    correct: '区间查询的树结构',
    wrong: ['点查询', '排序', '图遍历'],
  },
  ds48: {
    text: '线段树的查询复杂度？',
    correct: 'O(log n)',
    wrong: ['O(n)', 'O(1)', 'O(n²)'],
  },
  ds49: {
    text: '什么是树状数组？',
    correct: '高效前缀和数据结构',
    wrong: ['后缀和', '排序', '图遍历'],
  },
  ds50: {
    text: '什么是稀疏表？',
    correct: '静态区间最值查询',
    wrong: ['动态查询', '排序', '图遍历'],
  },
  ds51: {
    text: '什么是前序遍历？',
    correct: '根-左-右',
    wrong: ['左-根-右', '左-右-根', '右-左-根'],
  },
  ds52: {
    text: '什么是中序遍历？',
    correct: '左-根-右',
    wrong: ['根-左-右', '左-右-根', '右-左-根'],
  },
  ds53: {
    text: '什么是后序遍历？',
    correct: '左-右-根',
    wrong: ['根-左-右', '左-根-右', '右-左-根'],
  },
  ds54: {
    text: '什么是层序遍历？',
    correct: '按层从上到下',
    wrong: ['按深度', '随机', '逆序'],
  },
  ds55: {
    text: '深度优先搜索使用什么？',
    correct: '栈',
    wrong: ['队列', '堆', '数组'],
  },
  ds56: {
    text: '广度优先搜索使用什么？',
    correct: '队列',
    wrong: ['栈', '堆', '数组'],
  },
  ds57: {
    text: '什么是完全二叉树？',
    correct: '除最后一层外都满',
    wrong: ['所有层都满', '只有根节点', '空树'],
  },
  ds58: {
    text: '什么是满二叉树？',
    correct: '所有层都满',
    wrong: ['除最后一层外都满', '只有根节点', '空树'],
  },
  ds59: {
    text: '什么是退化树？',
    correct: '类似链表的树',
    wrong: ['平衡树', '完全树', '满树'],
  },
  ds60: {
    text: '树的高度是什么？',
    correct: '从根到最深叶子的边数',
    wrong: ['节点数', '边数', '叶子数'],
  },
  ds61: {
    text: '什么是循环链表？',
    correct: '尾节点指向头节点',
    wrong: ['尾节点指向空', '无尾节点', '双向链表'],
  },
  ds62: {
    text: '什么是哨兵节点？',
    correct: '简化边界条件的虚拟节点',
    wrong: ['真实数据节点', '根节点', '叶子节点'],
  },
  ds63: {
    text: '数组和链表的主要区别？',
    correct: '内存分配方式',
    wrong: ['存储数据类型', '操作方式', '使用场景'],
  },
  ds64: {
    text: '什么时候用数组？',
    correct: '需要随机访问时',
    wrong: ['频繁插入删除', '未知大小', '动态增长'],
  },
  ds65: {
    text: '什么时候用链表？',
    correct: '频繁插入删除时',
    wrong: ['需要随机访问', '固定大小', '静态数据'],
  },
  ds66: {
    text: '什么是动态数组？',
    correct: '可自动扩容的数组',
    wrong: ['固定大小数组', '链表', '树'],
  },
  ds67: {
    text: 'ArrayList是什么？',
    correct: '动态数组实现',
    wrong: ['链表实现', '树实现', '图实现'],
  },
  ds68: {
    text: 'LinkedList是什么？',
    correct: '双向链表实现',
    wrong: ['数组实现', '树实现', '图实现'],
  },
  ds69: {
    text: 'HashMap是什么？',
    correct: '哈希表实现的映射',
    wrong: ['树实现', '数组实现', '链表实现'],
  },
  ds70: {
    text: 'TreeMap是什么？',
    correct: '红黑树实现的映射',
    wrong: ['哈希表实现', '数组实现', '链表实现'],
  },
  ds71: {
    text: 'HashSet是什么？',
    correct: '哈希表实现的集合',
    wrong: ['树实现', '数组实现', '链表实现'],
  },
  ds72: {
    text: 'TreeSet是什么？',
    correct: '红黑树实现的集合',
    wrong: ['哈希表实现', '数组实现', '链表实现'],
  },
  ds73: {
    text: 'PriorityQueue是什么？',
    correct: '堆实现的优先队列',
    wrong: ['数组实现', '链表实现', '树实现'],
  },
  ds74: {
    text: 'Deque是什么？',
    correct: '双端队列',
    wrong: ['单端队列', '栈', '链表'],
  },
  ds75: {
    text: '什么是LRU缓存？',
    correct: '最近最少使用缓存',
    wrong: ['最近最多使用', '随机缓存', '先进先出缓存'],
  },
  ds76: {
    text: 'LRU缓存用什么实现？',
    correct: '哈希表和双向链表',
    wrong: ['只用数组', '只用树', '只用栈'],
  },
  ds77: {
    text: '什么是LFU缓存？',
    correct: '最不经常使用缓存',
    wrong: ['最经常使用', '随机缓存', '先进先出缓存'],
  },
  ds78: {
    text: '什么是布隆过滤器？',
    correct: '概率数据结构',
    wrong: ['精确数据结构', '排序结构', '搜索结构'],
  },
  ds79: {
    text: '布隆过滤器的特点？',
    correct: '可能有假阳性',
    wrong: ['无假阳性', '有假阴性', '完全精确'],
  },
  ds80: {
    text: '什么是计数布隆过滤器？',
    correct: '支持删除的布隆过滤器',
    wrong: ['不支持删除', '精确计数', '排序结构'],
  },
  ds81: {
    text: '什么是后缀数组？',
    correct: '所有后缀的排序数组',
    wrong: ['前缀数组', '随机数组', '未排序数组'],
  },
  ds82: {
    text: '什么是后缀树？',
    correct: '所有后缀的压缩字典树',
    wrong: ['前缀树', '普通树', '堆'],
  },
  ds83: {
    text: '后缀数组和后缀树的关系？',
    correct: '后缀数组是后缀树的压缩',
    wrong: ['完全不同', '后缀树更简单', '后缀数组更复杂'],
  },
  ds84: {
    text: '什么是KMP算法？',
    correct: '字符串匹配算法',
    wrong: ['排序算法', '图算法', '数学算法'],
  },
  ds85: {
    text: '什么是Rabin-Karp算法？',
    correct: '使用哈希的字符串匹配',
    wrong: ['不使用哈希', '排序算法', '图算法'],
  },
  ds86: {
    text: '什么是AC自动机？',
    correct: '多模式字符串匹配',
    wrong: ['单模式匹配', '排序', '图遍历'],
  },
  ds87: {
    text: '什么是笛卡尔树？',
    correct: '满足堆和BST性质的树',
    wrong: ['只满足堆', '只满足BST', '都不满足'],
  },
  ds88: {
    text: '什么是Treap？',
    correct: '树和堆的结合',
    wrong: ['只是树', '只是堆', '链表'],
  },
  ds89: {
    text: '什么是伸展树？',
    correct: '自调整二叉搜索树',
    wrong: ['不调整', 'AVL树', '红黑树'],
  },
  ds90: {
    text: '什么是替罪羊树？',
    correct: '基于重建的平衡树',
    wrong: ['基于旋转', '不平衡', '链表'],
  },
  ds91: {
    text: '什么是左偏树？',
    correct: '可合并的堆',
    wrong: ['不可合并', '普通堆', '二叉树'],
  },
  ds92: {
    text: '什么是斐波那契堆？',
    correct: '摊销高效的堆',
    wrong: ['普通堆', '二叉堆', '数组'],
  },
  ds93: {
    text: '什么是配对堆？',
    correct: '简单高效的可合并堆',
    wrong: ['复杂堆', '不可合并', '数组'],
  },
  ds94: {
    text: '什么是二项堆？',
    correct: '二项树的集合',
    wrong: ['二叉树', '普通堆', '数组'],
  },
  ds95: {
    text: '什么是van Emde Boas树？',
    correct: '整数集合的高效结构',
    wrong: ['字符串结构', '图结构', '普通树'],
  },
  ds96: {
    text: '什么是k-d树？',
    correct: '多维空间划分树',
    wrong: ['一维树', '图', '链表'],
  },
  ds97: {
    text: 'k-d树常用于什么？',
    correct: '最近邻搜索',
    wrong: ['排序', '字符串匹配', '图遍历'],
  },
  ds98: {
    text: '什么是R树？',
    correct: '空间索引结构',
    wrong: ['普通树', '链表', '数组'],
  },
  ds99: {
    text: '什么是四叉树？',
    correct: '二维空间划分树',
    wrong: ['一维树', '三维树', '链表'],
  },
  ds100: {
    text: '什么是八叉树？',
    correct: '三维空间划分树',
    wrong: ['一维树', '二维树', '链表'],
  },
};

export default dataStructures;
