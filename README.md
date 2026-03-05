# AI Spec2UI

AI Spec2UI 是一个帮助设计师将设计规范提供给 AI，并让 AI 按照设计规范生成 UI 的自动化工作流。

通过这个工作流，设计师可以将 Figma 的 Design Tokens 转换为 AI 可理解的规则文件，再通过 AI 自动生成 UI 组件，并通过校验和可视化工具验证组件是否符合设计规范。

AI Spec2UI 的目标是解决一个核心问题：

**如何让 AI 严格按照设计系统输出 UI，而不是随意生成。**

---

# 工作原理

AI Spec2UI 的核心思路是：

先把设计规范转换为结构化数据，然后让 AI 按照这些规范生成 UI。

整个过程包含四个关键阶段：

1. 将 Figma 导出的 Design Tokens 转换为开发可用的 Token 文件
2. 根据 Token 自动生成 AI 可以理解的设计规则
3. 让 AI 按照这些规则生成 UI 组件
4. 对生成的组件进行自动校验并提供可视化预览

通过这个流程，可以确保 AI 生成的 UI 组件始终遵循设计规范。

---

# 自动化流程

AI Spec2UI 的自动化流程如下：

第一步
设计师从 Figma 导出 Design Tokens。

第二步
系统根据 Token 自动生成设计系统规则，包括颜色规范、间距规范、字体规范等。

第三步
AI 根据这些规则生成 UI 组件，例如按钮、卡片、输入框等。

第四步
系统自动检查生成的 UI 是否符合 Token 规范，例如颜色是否正确、间距是否符合设计系统。

第五步
生成 Storybook 可视化预览，方便设计师和团队查看生成的 UI。

最终输出的内容包括：

* Token 文件（CSS / JS）
* AI 设计规则文件
* AI 生成的 UI 组件
* Storybook 可视化预览

---

# 使用步骤

第一步
克隆 AI Spec2UI 仓库到本地。

第二步
从 Figma 导出 Design Tokens，并替换仓库中的 Token 文件。

第三步
运行自动化流程生成 Token 文件、AI 规则文件以及 UI 组件。

第四步
系统会自动检查 UI 是否符合设计规范。

第五步
通过 Storybook 查看生成的 UI 组件并进行验证。

---

# 仓库结构

AI Spec2UI 仓库包含以下几个核心部分：

resources
用于存放从 Figma 导出的 Design Tokens。

scripts
自动化脚本，用于生成 Token 文件、AI 规则文件、UI 组件以及 Storybook 配置。

rules
自动生成的设计系统规则，AI 会根据这些规则生成 UI。

generated-ui
AI 生成的 UI 组件。

storybook
用于可视化预览生成的 UI。

examples
示例输出文件。

---

# 适用场景

AI Spec2UI 适用于以下场景：

设计系统团队
需要让 AI 按照设计系统自动生成组件。

设计师使用 AI 生成 UI
希望 AI 严格遵循设计规范，而不是随意生成。

AI + 设计系统自动化
构建 AI 驱动的 UI 生产流程。

---

# 总结

AI Spec2UI 提供了一种新的工作方式：

设计规范 → Token → AI规则 → AI生成UI → 自动校验 → 可视化预览

通过这个流程，设计师可以真正让 AI 成为设计系统的一部分，而不是一个随机生成 UI 的工具。

---
