# git
       这是一个小的技巧，对于如何快速使用git。

       首先你得去githup官网注册一个账号。
       然后如果你是苹果系统就直接可以使用终端。
       Windows系统需要去下载git。然后装载git bash.

       接下来是如何使用git。
       一般你在githup官网创建项目的时候。
       可以直接去官网拉取整个初始项目。
       或者在本地使用git bash 拉取。
       下面是git的一些常用命令：

       1.在已有项目添加到githup上。
       git init
       git add README.md
       git commit -m "first commit"
       git remote add origin "project address"
       这里可能会出错，
       在出错的情况下运行
       git pull origin master 然后push
       git push -u origin master

       2.使用git 新建分支以及管理分支
       git branch 查看本地所有分支
       git branch 分支的名称  新建本地分支
       git branch -a 查看远程分支
       git branch -d 本地分支名 本地删除一个分支
       git checkout 分支名称 （切换分支）
       git push origin 分支名称 （将本地分支推送至githup）
       git remote origin add 分支名 （增加远程分支）
       git pull origin 分支名 （拉取分支）
       

       3.开发常使用git命令
       git config user.name  查看本地的账号名
       git config user.email  查看本地邮箱账号
       git config --global user.name "" 更改本地git账号
       git config --global user.email "" 更改本地关联邮箱
       git status  列出文件信息，查看文件变化信息
       git add -A  提交所有变化
       git add -u  提交被修改(modified)和被删除(deleted)文件，不包括新文件(new)
       git add .  提交新文件(new)和被修改(modified)文件，不包括被删除(deleted)文件（开发中常使用）
       git commit -m "提交的描述" {必须填写}列出提交，或者修改原因，方便出现错误时，可以回滚
       git push 默认推送至主分支
       git push origin 分支名 推送至分支下
       git fetch origin master 拉去分支到本地
       git pull origin master  主分支改变情况
       git merge  分支名 分支合并（合并后可直接提交至githup）
       git show   查看最后一次提交记录的  简介 （目录）
       git remote rm origin  删除远程关联
       git remote add origin  添加远程关联
       解决多人并发修改文件产生冲突
       当多人开发是有多人同时修改一文件，先签出代码，将合并和代码冲突部分解决。将解决冲突后的文件复制备份，
       然后
       git reset --hard head 处理修改冲突返回上一部未修改时状态，再将冲突后处理好的文件，覆盖掉当前冲突文件，
       然后提交。最后merge其他部分修改文件。
       git commit --amend -m "新的提交信息"

       
       

       Linux 命名 进入编辑命令：vim (文件名)   
       可输入模式 ： 点 i    存储： 点esc  ：w  enter 
       退出编辑模式：q   存储退出 ：wq

       利用命令行终端 启一个http sever ：npm install http-server -g  
        http-server -p (端口)

        浏览器版本检测跟新：
      <!--[if lte IE 8]>
      <p class="browserupgrade">您的浏览器版本老旧，
        请到 <a href="http://browsehappy.com">
        这里</a> 更新，以获取最佳的体验
      </p>
      <![endif] -->
