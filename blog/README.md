# LessPhoto Blog 写作区

这里是博客文章的中文写作入口，适合先写选题、搜索意图和文章大纲。

## 文件命名

新建大纲时使用：

```text
YYYYMMDD-name.md
```

例如：

```text
20261029-如何清理iPhone照片.md
```

建议文件名使用短横线分隔，日期使用当天的 `YYYYMMDD` 格式。中文标题可以直接写进文件名，方便在 Finder 或编辑器里查找。

## 目录

- `大纲/`：只放中文文章大纲和写作草稿，不会被 Astro 自动发布。
- `大纲/20261029-博客文章大纲-范本.md`：复制后开始写新文章。

## 现有文章在哪里

已经发布或准备发布的文章仍然放在 Astro 内容目录：

```text
src/content/blog/<slug>/en.md
src/content/blog/<slug>/zh-hans.md
src/content/blog/<slug>/zh-hant.md
```

这部分需要符合完整的 frontmatter 和三种语言结构，不适合作为日常中文大纲入口。完成中文大纲后，再根据需要整理到正式 Blog 内容目录。

博客 SEO 方向和现有选题规划仍在项目外的：

```text
../lessPhoto-blueprint/98Blog SEO与内容规划.md
```

## 建议工作流

1. 复制 `大纲/20261029-博客文章大纲-范本.md`。
2. 按当天日期和文章主题重命名，例如 `20261029-如何清理iPhone照片.md`。
3. 先只写中文：标题、用户问题、关键词、文章结构、事实核对和 LessPhoto 的自然切入点。
4. 确认文章方向后，再补充正式 Markdown、英文和繁体中文版本。
5. 发布前运行 `npm run build`，让 Astro 检查 frontmatter 和页面生成结果。
