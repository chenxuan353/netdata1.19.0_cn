// SPDX-License-Identifier: GPL-3.0-or-later

// Codacy declarations
/* global NETDATA */

var netdataDashboard = window.netdataDashboard || {};

// Informational content for the various sections of the GUI (menus, sections, charts, etc.)

// ----------------------------------------------------------------------------
// Menus

netdataDashboard.menu = {
    system: {
        title: "系统概览",
        icon: '<i class="fas fa-bookmark"></i>',
        info: "关键系统指标的概述。",
    },

    services: {
        title: "systemd 服务",
        icon: '<i class="fas fa-cogs"></i>',
        info: "systemd 服务的资源利用情况。netdata通过CGROUPS（容器使用的资源账户）监控所有systemd服务。",
    },

    ap: {
        title: "接入点",
        icon: '<i class="fas fa-wifi"></i>',
        info: "系统中发现的接入点（即以AP模式运行的无线接口）的性能指标。",
    },

    tc: {
        title: "服务质量",
        icon: '<i class="fas fa-globe"></i>',
        info:
            "Netdata使用其 <a href='https://github.com/netdata/netdata/blob/master/collectors/tc.plugin/tc-qos-helper.sh.in' target='_blank'>tc-helper插件</a> 收集和可视化<code>tc</code>类别利用率。 " +
            "如果您还使用<a href='http://firehol.org/#fireqos' target='_blank'>FireQOS</a>来设置QoS，netdata会自动收集接口和类别名称。 " +
            "如果您的QoS配置包括开销计算，则此处显示的值将包括这些开销（与网络接口部分报告的相同接口的总带宽将低于此处报告的总带宽）。 " +
            "QoS数据收集可能与接口存在轻微的时间差异（QoS数据收集使用BASH脚本，因此数据收集的时间差异应该是合理的几毫秒）。",
    },

    net: {
        title: "网络接口",
        icon: '<i class="fas fa-sitemap"></i>',
        info: "网络接口的性能指标。",
    },

    ip: {
        title: "网络堆栈",
        icon: '<i class="fas fa-cloud"></i>',
        info: function (os) {
            if (os === "linux")
                return "系统网络堆栈的指标。这些指标是从<code>/proc/net/netstat</code>收集的，适用于IPv4和IPv6流量，并与内核网络堆栈的操作相关。";
            else return "系统网络堆栈的指标。";
        },
    },

    ipv4: {
        title: "IPv4网络",
        icon: '<i class="fas fa-cloud"></i>',
        info:
            "系统IPv4协议栈的指标。" +
            '<a href="https://zh.wikipedia.org/wiki/IPv4" target="_blank">互联网协议第4版（IPv4）</a>是' +
            "互联网协议（IP）的第四个版本。它是互联网标准化互联网方法的核心协议之一。IPv4是用于分组交换网络的无连接协议。" +
            "它采用尽力而为的传输模型，不保证传输，也不保证正确的排序或避免重复传输。这些方面，包括数据完整性，" +
            "由上层传输协议（如传输控制协议TCP）来处理。",
    },

    ipv6: {
        title: "IPv6 网络",
        icon: '<i class="fas fa-cloud"></i>',
        info: '系统IPv6堆栈的指标。<a href="https://zh.wikipedia.org/wiki/IPv6" target="_blank">互联网协议第6版（IPv6）</a>是互联网协议（IP）的最新版本，提供了计算机网络上的标识和定位系统，并在互联网上路由流量。IPv6由互联网工程任务组（IETF）开发，以解决IPv4地址耗尽的长期问题。IPv6旨在取代IPv4。',
    },

    sctp: {
        title: "SCTP 网络",
        icon: '<i class="fas fa-cloud"></i>',
        info: '<a href="https://zh.wikipedia.org/wiki/%E6%B5%81%E6%8E%A7%E5%88%B6%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE" target="_blank">流控制传输协议（SCTP）</a>是一种计算机网络协议，它在传输层操作，并提供了类似于流行协议TCP和UDP的功能。SCTP提供了UDP和TCP的一些特性：它像UDP一样是面向消息的，并确保可靠、按顺序传输消息，并具有类似TCP的拥塞控制。它通过提供多宿和冗余路径来增加韧性和可靠性，与这些协议不同。',
    },

    ipvs: {
        title: "IP 虚拟服务器",
        icon: '<i class="fas fa-eye"></i>',
        info: '<a href="http://www.linuxvirtualserver.org/software/ipvs.html" target="_blank">IPVS（IP虚拟服务器）</a>在Linux内核中实现了传输层负载平衡，称为第4层切换。在主机上运行的IPVS充当一组真实服务器前面的负载均衡器，它可以将基于TCP/UDP的服务请求定向到真实服务器，并使真实服务器的服务出现为单个IP地址上的虚拟服务。',
    },

    netfilter: {
        title: "防火墙（netfilter）",
        icon: '<i class="fas fa-shield-alt"></i>',
        info: "netfilter组件的性能指标。",
    },

    ipfw: {
        title: "防火墙（ipfw）",
        icon: '<i class="fas fa-shield-alt"></i>',
        info: "ipfw规则的计数器和内存使用情况。",
    },

    cpu: {
        title: "CPU",
        icon: '<i class="fas fa-bolt"></i>',
        info: '系统每个CPU的详细信息。所有CPU的系统摘要可以在<a href="#menu_system">系统概述</a>部分找到。',
    },

    mem: {
        title: "内存",
        icon: '<i class="fas fa-microchip"></i>',
        info: "系统内存管理的详细信息。",
    },

    disk: {
        title: "磁盘",
        icon: '<i class="fas fa-hdd"></i>',
        info: "系统磁盘的性能信息图表。特别注意以与<code>iostat -x</code>兼容的方式呈现磁盘性能指标。netdata默认情况下阻止为单个分区和未挂载的虚拟磁盘渲染性能图表。可以通过在netdata配置文件中配置相关设置来启用已禁用的图表。",
    },

    sensors: {
        title: "传感器",
        icon: '<i class="fas fa-leaf"></i>',
        info: "配置的系统传感器读数。",
    },

    ipmi: {
        title: "IPMI",
        icon: '<i class="fas fa-leaf"></i>',
        info: "智能平台管理接口（IPMI）是一组计算机接口规范，用于提供独立于主机系统的CPU、固件（BIOS或UEFI）和操作系统的管理和监控功能。",
    },

    samba: {
        title: "Samba",
        icon: '<i class="fas fa-folder-open"></i>',
        info: "该系统Samba文件共享操作的性能指标。Samba是Windows服务的实现，包括Windows SMB协议文件共享。",
    },

    nfsd: {
        title: "NFS服务器",
        icon: '<i class="fas fa-folder-open"></i>',
        info: "网络文件服务器的性能指标。NFS是一种分布式文件系统协议，允许客户端计算机上的用户通过网络访问文件，类似于访问本地存储。NFS和许多其他协议一样，构建在开放网络计算远程过程调用（ONC RPC）系统之上。NFS是在请求评论（RFC）中定义的开放标准。",
    },

    nfs: {
        title: "NFS客户端",
        icon: '<i class="fas fa-folder-open"></i>',
        info: "该系统作为NFS客户端的NFS操作的性能指标。",
    },

    zfs: {
        title: "ZFS文件系统",
        icon: '<i class="fas fa-folder-open"></i>',
        info: 'ZFS文件系统的性能指标。以下图表可视化了由<a href="https://github.com/zfsonlinux/zfs/blob/master/cmd/arcstat/arcstat" target="_blank">arcstat.py</a>和<a href="https://github.com/zfsonlinux/zfs/blob/master/cmd/arc_summary/arc_summary3" target="_blank">arc_summary.py</a>报告的所有指标。',
    },

    btrfs: {
        title: "BTRFS文件系统",
        icon: '<i class="fas fa-folder-open"></i>',
        info: "BTRFS文件系统的磁盘空间指标。",
    },

    apps: {
        title: "应用程序",
        icon: '<i class="fas fa-heartbeat"></i>',
        info: '使用netdata的<code>apps.plugin</code>收集每个应用程序的统计信息。此插件遍历所有进程，并聚合<code>/etc/netdata/apps_groups.conf</code>中定义的感兴趣的应用程序的统计信息，可以通过运行<code>$ /etc/netdata/edit-config apps_groups.conf</code>进行编辑（默认在<a href="https://github.com/netdata/netdata/blob/master/collectors/apps.plugin/apps_groups.conf" target="_blank">此处</a>）。该插件内部构建一个进程树（类似于<code>ps fax</code>），并将进程分组在一起（评估子进程和父进程），因此结果始终是具有预定义维度集的图表（当然，仅报告发现的正在运行的应用程序组）。报告的值与<code>top</code>兼容，尽管netdata插件还计算已退出子进程的资源（与<code>top</code>不同，后者仅显示当前运行进程的资源）。因此，对于诸如shell脚本之类的进程，报告的值包括每个时间段内这些脚本运行的命令使用的资源。',
    },

    users: {
        title: "用户",
        icon: '<i class="fas fa-user"></i>',
        info: "使用netdata的<code>apps.plugin</code>收集每个用户的统计信息。报告的值与<code>top</code>兼容，尽管netdata插件还计算已退出子进程的资源（与<code>top</code>不同，后者仅显示当前运行进程的资源）。因此，对于诸如shell脚本之类的进程，报告的值包括每个时间段内这些脚本运行的命令使用的资源。",
    },

    groups: {
        title: "用户组",
        icon: '<i class="fas fa-users"></i>',
        info: "使用netdata的<code>apps.plugin</code>收集每个用户组的统计信息。报告的值与<code>top</code>兼容，尽管netdata插件还计算已退出子进程的资源（与<code>top</code>不同，后者仅显示当前运行进程的资源）。因此，对于诸如shell脚本之类的进程，报告的值包括每个时间段内这些脚本运行的命令使用的资源。",
    },

    netdata: {
        title: "Netdata监控",
        icon: '<i class="fas fa-chart-bar"></i>',
        info: "netdata本身及其插件操作的性能指标。",
    },

    example: {
        title: "示例图表",
        info: "示例图表，演示外部插件架构。",
    },

    cgroup: {
        title: "cgroup",
        icon: '<i class="fas fa-th"></i>',
        info: "容器资源利用率指标。Netdata从<b>cgroups</b>（从<b>控制组</b>缩写而来）中读取此信息，这是Linux内核的一个功能，用于限制和记录一组进程的资源使用情况（CPU、内存、磁盘I/O、网络等）。<b>cgroups</b>与<b>namespaces</b>（提供进程之间的隔离）一起提供了我们通常称之为的<b>容器</b>。",
    },

    cgqemu: {
        title: "cgqemu",
        icon: '<i class="fas fa-th-large"></i>',
        info: "QEMU虚拟机资源利用率指标。QEMU（Quick Emulator的缩写）是一个执行硬件虚拟化的免费开源托管型虚拟化程序。",
    },

    fping: {
        title: "fping",
        icon: '<i class="fas fa-exchange-alt"></i>',
        info: "通过<b>fping</b>获取的网络延迟统计信息。 <b>fping</b>是一个用于向网络主机发送ICMP回显探测的程序，类似于<code>ping</code>，但在同时ping多个主机时性能更好。3.15版本之后的fping可以直接用作netdata插件。",
    },

    gearman: {
        title: "Gearman",
        icon: '<i class="fas fa-tasks"></i>',
        info: "Gearman是一个作业服务器，允许您并行执行工作，负载平衡处理，并在不同语言之间调用函数。",
    },

    ioping: {
        title: "ioping",
        icon: '<i class="fas fa-exchange-alt"></i>',
        info: "磁盘延迟统计，通过<b>ioping</b>。 <b>ioping</b>是一个用于从/向磁盘读取/写入数据探测的程序。",
    },

    httpcheck: {
        title: "Http Check",
        icon: '<i class="fas fa-heartbeat"></i>',
        info: "使用HTTP检查进行Web服务可用性和延迟监控。此插件是端口检查插件的专业版本。",
    },

    memcached: {
        title: "memcached",
        icon: '<i class="fas fa-database"></i>',
        info: "对<b>memcached</b>的性能指标。Memcached是一个通用的分布式内存缓存系统。它通常用于通过将数据和对象缓存在RAM中来加速动态数据库驱动的网站，以减少读取外部数据源（如数据库或API）的次数。",
    },

    monit: {
        title: "monit",
        icon: '<i class="fas fa-database"></i>',
        info: "对<b>monit</b>中检查的状态。Monit是一个用于管理和监控Unix系统上的进程、程序、文件、目录和文件系统的实用程序。Monit进行自动维护和修复，并可以在错误情况下执行有意义的因果操作。",
    },

    mysql: {
        title: "MySQL",
        icon: '<i class="fas fa-database"></i>',
        info: "对开源关系数据库管理系统（RDBMS）<b>mysql</b>的性能指标。",
    },

    postgres: {
        title: "Postgres",
        icon: '<i class="fas fa-database"></i>',
        info: "对面向对象关系数据库管理系统（ORDBMS）<b>PostgresSQL</b>的性能指标。",
    },

    redis: {
        title: "Redis",
        icon: '<i class="fas fa-database"></i>',
        info: "对<b>redis</b>的性能指标。Redis（REmote DIctionary Server）是一个实现数据结构服务器的软件项目。它是开源的、网络化的、内存中的，并存储具有可选持久性的键。",
    },

    rethinkdbs: {
        title: "RethinkDB",
        icon: '<i class="fas fa-database"></i>',
        info: "对<b>rethinkdb</b>的性能指标。RethinkDB是第一个为实时应用构建的开源可扩展数据库。",
    },

    retroshare: {
        title: "RetroShare",
        icon: '<i class="fas fa-share-alt"></i>',
        info: "对<b>RetroShare</b>的性能指标。RetroShare是基于GNU Privacy Guard（GPG）构建的朋友对朋友网络，用于加密文件共享、无服务器电子邮件、即时消息传递、在线聊天和BBS的开源软件。",
    },

    riakkv: {
        title: "Riak KV",
        icon: '<i class="fas fa-database"></i>',
        info: "分布式键值存储<b>Riak KV</b>的指标。",
    },

    ipfs: {
        title: "IPFS",
        icon: '<i class="fas fa-folder-open"></i>',
        info: "InterPlanetary文件系统（IPFS）的性能指标，这是一个内容寻址、点对点超媒体分发协议。",
    },

    phpfpm: {
        title: "PHP-FPM",
        icon: '<i class="fas fa-eye"></i>',
        info: "对<b>PHP-FPM</b>的性能指标，这是PHP的另一种FastCGI实现。",
    },

    pihole: {
        title: "Pi-hole",
        icon: '<i class="fas fa-ban"></i>',
        info: '对<a href="https://pi-hole.net/" target="_blank">Pi-hole</a>的指标，这是一个用于屏蔽互联网广告的黑洞。Pi-Hole API返回的指标都是过去24小时的数据。',
    },

    portcheck: {
        title: "Port Check",
        icon: '<i class="fas fa-heartbeat"></i>',
        info: "使用端口检查进行服务可用性和延迟监控。",
    },

    postfix: {
        title: "邮件后缀",
        icon: '<i class="fas fa-envelope"></i>',
        info: undefined,
    },

    dovecot: {
        title: "Dovecot",
        icon: '<i class="fas fa-envelope"></i>',
        info: undefined,
    },

    hddtemp: {
        title: "硬盘温度",
        icon: '<i class="fas fa-thermometer-half"></i>',
        info: undefined,
    },

    nginx: {
        title: "nginx",
        icon: '<i class="fas fa-eye"></i>',
        info: undefined,
    },

    apache: {
        title: "Apache",
        icon: '<i class="fas fa-eye"></i>',
        info: undefined,
    },

    lighttpd: {
        title: "Lighttpd",
        icon: '<i class="fas fa-eye"></i>',
        info: undefined,
    },

    web_log: {
        title: undefined,
        icon: '<i class="fas fa-file-alt"></i>',
        info: '从服务器日志文件中提取的信息。<code>web_log</code>插件逐步解析服务器日志文件，以实时方式提供关键服务器性能指标的分解。对于Web服务器，可以选择使用扩展的日志文件格式（对于<code>nginx</code>和<code>apache</code>），提供请求和响应的时间信息和带宽。还可以配置<code>web_log</code>插件以提供按URL模式的请求分解（请查看<a href="https://github.com/netdata/netdata/blob/master/collectors/python.d.plugin/web_log/web_log.conf" target="_blank"><code>/etc/netdata/python.d/web_log.conf</code></a>）。',
    },

    named: {
        title: "named",
        icon: '<i class="fas fa-tag"></i>',
        info: undefined,
    },

    squid: {
        title: "Squid",
        icon: '<i class="fas fa-exchange-alt"></i>',
        info: undefined,
    },

    nut: {
        title: "UPS",
        icon: '<i class="fas fa-battery-half"></i>',
        info: undefined,
    },

    apcupsd: {
        title: "UPS",
        icon: '<i class="fas fa-battery-half"></i>',
        info: undefined,
    },

    smawebbox: {
        title: "太阳能电源",
        icon: '<i class="fas fa-sun"></i>',
        info: undefined,
    },

    fronius: {
        title: "Fronius",
        icon: '<i class="fas fa-sun"></i>',
        info: undefined,
    },

    stiebeleltron: {
        title: "Stiebel Eltron",
        icon: '<i class="fas fa-thermometer-half"></i>',
        info: undefined,
    },

    snmp: {
        title: "SNMP",
        icon: '<i class="fas fa-random"></i>',
        info: undefined,
    },

    go_expvar: {
        title: "Go - expvars",
        icon: '<i class="fas fa-eye"></i>',
        info: '有关运行中的Go应用程序的统计信息，由<a href="https://golang.org/pkg/expvar/" target="_blank">expvar包</a>公开。',
    },

    chrony: {
        icon: '<i class="fas fa-clock"></i>',
        info: "有关系统时钟性能的chronyd参数。",
    },

    couchdb: {
        icon: '<i class="fas fa-database"></i>',
        info: '对<b><a href="https://couchdb.apache.org/">CouchDB</a></b>的性能指标，这是一个具有HTTP API和多主复制功能的开源JSON文档数据库。',
    },

    beanstalk: {
        title: "Beanstalkd",
        icon: '<i class="fas fa-tasks"></i>',
        info: '提供<b><a href="http://kr.github.io/beanstalkd/">beanstalkd</a></b>服务器和该服务器上可用的任何tube的统计信息，使用从beanstalkc获取的数据。',
    },

    rabbitmq: {
        title: "RabbitMQ",
        icon: '<i class="fas fa-comments"></i>',
        info: '开源消息代理<b><a href="https://www.rabbitmq.com/">RabbitMQ</a></b>的性能数据。',
    },
    ceph: {
        title: "Ceph",
        icon: '<i class="fas fa-database"></i>',
        info: '提供关于开源分布式存储系统<a href="http://ceph.com/">Ceph</a>集群服务器的统计信息。',
    },

    ntpd: {
        title: "ntpd",
        icon: '<i class="fas fa-clock"></i>',
        info: '提供网络时间协议守护程序<a href="http://www.ntp.org/">ntpd</a>内部变量的统计信息，可选包括已配置的对等体（如果在模块配置中启用）。该模块呈现了通过NTP模式6 UDP数据包显示的性能指标，使用NTP查询程序<a href="http://doc.ntp.org/current-stable/ntpq.html">ntpq</a>与NTP服务器通信。',
    },

    spigotmc: {
        title: "Spigot MC",
        icon: '<i class="fas fa-eye"></i>',
        info: '为<b><a href="https://www.spigotmc.org/">Spigot Minecraft</a></b>服务器提供基本性能统计信息。',
    },

    unbound: {
        title: "Unbound",
        icon: '<i class="fas fa-tag"></i>',
        info: undefined,
    },

    boinc: {
        title: "BOINC",
        icon: '<i class="fas fa-microchip"></i>',
        info: '为<b><a href="http://boinc.berkeley.edu/">BOINC</a></b>分布式计算客户端提供任务计数。',
    },

    w1sensor: {
        title: "1-Wire Sensors",
        icon: '<i class="fas fa-thermometer-half"></i>',
        info: '来自<a href="https://en.wikipedia.org/wiki/1-Wire">1-Wire</a>传感器的数据。目前会自动检测温度传感器。',
    },

    logind: {
        title: "Logind",
        icon: '<i class="fas fa-user"></i>',
        info: undefined,
    },

    powersupply: {
        title: "Power Supply",
        icon: '<i class="fas fa-battery-half"></i>',
        info: '各种系统电源的统计信息。数据来自<a href="https://www.kernel.org/doc/Documentation/power/power_supply_class.txt">Linux电源供应类</a>。',
    },

    xenstat: {
        title: "Xen Node",
        icon: '<i class="fas fa-server"></i>',
        info: "Xen节点的一般统计信息。使用<b>xenstat</b>库收集的数据。",
    },

    xendomain: {
        title: "",
        icon: '<i class="fas fa-th-large"></i>',
        info: "Xen域资源利用率指标。Netdata使用<b>xenstat</b>库读取此信息，该库提供对虚拟机的资源使用信息（CPU、内存、磁盘I/O、网络）的访问。",
    },

    wmi: {
        title: "wmi",
        icon: '<i class="fas fa-server"></i>',
        info: undefined,
    },

    perf: {
        title: "Perf Counters",
        icon: '<i class="fas fa-tachometer-alt"></i>',
        info: "性能监控计数器（PMC）。使用<b>perf_event_open()</b>系统调用收集的数据，利用硬件性能监控单元（PMU）。",
    },

    vsphere: {
        title: "vSphere",
        icon: '<i class="fas fa-server"></i>',
        info: 'ESXI主机和虚拟机的性能统计信息。使用<code><a href="https://github.com/vmware/govmomi"> govmomi</a></code>库从<a href="https://www.vmware.com/products/vcenter-server.html">VMware vCenter Server</a>收集的数据。',
    },

    vcsa: {
        title: "VCSA",
        icon: '<i class="fas fa-server"></i>',
        info: 'vCenter Server Appliance健康统计信息。从<a href="https://vmware.github.io/vsphere-automation-sdk-rest/vsphere/index.html#SVC_com.vmware.appliance.health">Health API</a>收集的数据。',
    },

    zookeeper: {
        title: "Zookeeper",
        icon: '<i class="fas fa-database"></i>',
        info: '为<b><a href="https://zookeeper.apache.org/">Zookeeper</a></b>服务器提供健康统计信息。通过命令端口使用<code><a href="https://zookeeper.apache.org/doc/r3.5.5/zookeeperAdmin.html#sc_zkCommands">mntr</a></code>命令收集数据。',
    },

    hdfs: {
        title: "HDFS",
        icon: '<i class="fas fa-folder-open"></i>',
        info: '提供<b><a href="https://hadoop.apache.org/docs/r3.2.0/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html">Hadoop分布式文件系统</a></b>的性能统计信息。模块通过<code>Java Management Extensions</code>从<code>HDFS</code>守护程序的Web界面收集指标。',
    },

    am2320: {
        title: "AM2320 Sensor",
        icon: '<i class="fas fa-thermometer-half"></i>',
        info: "来自外部AM2320传感器的读数。",
    },
};

// ----------------------------------------------------------------------------
// submenus

// information to be shown, just below each submenu

// information about the submenus
netdataDashboard.submenu = {
    "web_log.squid_bandwidth": {
        title: "带宽",
        info: 'Squid发送的响应的带宽。该图表可能呈现异常的峰值，因为带宽是在服务器保存日志行的时间计算的，即使提供服务所需的时间跨越了更长的持续时间。我们建议使用QoS（例如<a href="http://firehol.org/#fireqos" target="_blank">FireQOS</a>）来准确计算服务器的带宽。',
    },

    "web_log.squid_responses": {
        title: "响应",
        info: "与Squid发送的响应相关的信息。",
    },

    "web_log.squid_requests": {
        title: "请求",
        info: "与Squid接收到的请求相关的信息。",
    },

    "web_log.squid_hierarchy": {
        title: "层次结构",
        info: "用于提供请求的Squid层次结构的性能指标。",
    },

    "web_log.squid_squid_transport": {
        title: "传输",
    },

    "web_log.squid_squid_cache": {
        title: "缓存",
        info: "Squid缓存性能指标。",
    },

    "web_log.squid_timings": {
        title: "时间",
        info: "Squid请求的持续时间。可能会报告不切实际的峰值，因为Squid记录请求的总时间，当请求完成时。特别是对于HTTPS，客户端从代理获取隧道，并直接与上游服务器交换请求，因此Squid无法评估单个请求，并报告隧道打开的总时间。",
    },

    "web_log.squid_clients": {
        title: "客户端",
    },

    "web_log.bandwidth": {
        info: '请求（<code>received</code>）和响应（<code>sent</code>）的带宽。 <code>received</code> 需要扩展的日志格式（如果没有，Web服务器日志将不包含此信息）。该图表可能呈现异常的峰值，因为带宽是在Web服务器保存日志行的时间计算的，即使提供服务所需的时间跨越了更长的持续时间。我们建议使用QoS（例如<a href="http://firehol.org/#fireqos" target="_blank">FireQOS</a>）来准确计算Web服务器的带宽。',
    },

    "web_log.urls": {
        info: '在<a href="https://github.com/netdata/netdata/blob/master/collectors/python.d.plugin/web_log/web_log.conf" target="_blank"><code>/etc/netdata/python.d/web_log.conf</code></a>中定义的每个<code>URL模式</code>的请求次数。此图表计算与定义的URL模式匹配的所有请求，独立于Web服务器响应代码（即成功和不成功的请求）。',
    },

    "web_log.clients": {
        info: "显示访问Web服务器的唯一客户端IP数量的图表。",
    },

    "web_log.timings": {
        info: "Web服务器响应时间 - Web服务器准备和响应请求所需的时间。这需要扩展的日志格式，其含义与Web服务器特定。对于大多数Web服务器，这包括从接收完整请求到分派响应的最后一个字节的时间。因此，它包括响应的网络延迟，但不包括请求的网络延迟。",
    },

    "mem.ksm": {
        title: "去重器（ksm）",
        info: "内核同页合并（KSM）性能监控，从<code>/sys/kernel/mm/ksm/</code>中的多个文件中读取。KSM是Linux内核（自2.6.32版本起）中的一项节省内存的去重功能。KSM守护程序ksmd定期扫描已向其注册的用户内存区域，查找可以由单个写保护页面替换的相同内容的页面（如果进程以后要更新其内容，则会自动复制）。KSM最初是为与KVM一起使用而开发的（在那里它被称为内核共享内存），以便通过共享它们之间的共同数据将更多的虚拟机放入物理内存。但它对于生成许多相同数据实例的任何应用程序都可能有用。",
    },

    "mem.hugepages": {
        info: "Hugepages是一项功能，允许内核利用现代硬件架构的多页大小能力。内核创建多个虚拟内存页面，从物理RAM和交换空间映射。CPU架构中有一种称为“转换查找缓冲器”（TLB）的机制，用于管理虚拟内存页面到实际物理内存地址的映射。TLB是有限的硬件资源，因此使用默认页面大小的大量物理内存会消耗TLB并增加处理开销。通过使用Huge Pages，内核能够创建更大尺寸的页面，每个页面在TLB中占用单个资源。Huge Pages被固定到物理RAM，不能被交换/分页出去。",
    },

    "mem.numa": {
        info: '非一致性内存访问（NUMA）是一种分层内存设计，内存访问时间取决于局部性。在NUMA下，处理器可以比非本地内存（另一个处理器本地的内存或处理器之间共享的内存）更快地访问自己的本地内存。有关各个指标的详细信息，请参阅<a href="https://www.kernel.org/doc/Documentation/numastat.txt" target="_blank">Linux内核文档</a>。',
    },

    "ip.ecn": {
        info: '<a href="https://en.wikipedia.org/wiki/Explicit_Congestion_Notification" target="_blank">显式拥塞通知（ECN）</a>是一种TCP扩展，允许在不丢弃数据包的情况下端到端地通知网络拥塞。ECN是一个可选功能，当底层网络基础设施也支持时，可以在两个支持ECN的端点之间使用。',
    },

    "netfilter.conntrack": {
        title: "连接跟踪器",
        info: "Netfilter连接跟踪器性能指标。连接跟踪器跟踪机器的所有连接，入站和出站。它通过保持具有所有打开连接的数据库来工作，跟踪网络和地址转换以及连接期望。",
    },

    "netfilter.nfacct": {
        title: "带宽计费",
        info: "以下信息是使用<code>nfacct.plugin</code>读取的。",
    },

    "netfilter.synproxy": {
        title: "DDoS保护",
        info: 'DDoS保护性能指标。<a href="https://github.com/firehol/firehol/wiki/Working-with-SYNPROXY" target="_blank">SYNPROXY</a>是一个TCP SYN数据包代理。它用于保护任何TCP服务器（如Web服务器）免受SYN洪水和类似的DDoS攻击。它是Linux内核（自3.12版本起）中的一个netfilter模块。它经过优化，能够处理每秒数百万个数据包，利用所有可用的CPU而无需在连接之间进行并发锁定。它可以用于任何类型的TCP流量（甚至加密的），因为它不会干扰内容本身。',
    },

    "ipfw.dynamic_rules": {
        title: "动态规则",
        info: "由相应的有状态防火墙规则创建的动态规则数量。",
    },

    "system.softnet_stat": {
        title: "softnet",
        info: function (os) {
            if (os === "linux")
                return '与网络接收工作相关的CPU软中断的统计信息。每个CPU核心的详细信息可以在<a href="#menu_cpu_submenu_softnet_stat">CPU / softnet statistics</a>中找到。 <b>processed</b> 表示处理的数据包数量，<b>dropped</b> 是因为网络设备积压队列已满而丢弃的数据包数量（在Linux上使用<code>sysctl</code>来增加<code>net.core.netdev_max_backlog</code>来解决），<b>squeezed</b> 是因为网络设备预算用完而丢弃的数据包数量（在Linux上使用<code>sysctl</code>来增加<code>net.core.netdev_budget</code>和/或<code>net.core.netdev_budget_usecs</code>来解决）。有关识别和排除与网络驱动程序相关的问题的更多信息，请参阅<a href="https://access.redhat.com/sites/default/files/attachments/20150325_network_performance_tuning.pdf" target="_blank">Red Hat Enterprise Linux Network Performance Tuning Guide</a>。';
            else return "与网络接收工作相关的CPU软中断的统计信息。";
        },
    },

    "cpu.softnet_stat": {
        title: "softnet",
        info: function (os) {
            if (os === "linux")
                return '与网络接收工作相关的每个CPU核心SoftIRQs的统计信息。所有CPU核心的总计可以在<a href="#menu_system_submenu_softnet_stat">系统/softnet统计</a>中找到。<b>processed</b>表示处理的数据包数量，<b>dropped</b>表示因网络设备积压队列已满而丢弃的数据包数量（在Linux上使用<code>sysctl</code>来增加<code>net.core.netdev_max_backlog</code>来解决此问题），<b>squeezed</b>表示因网络设备预算用尽而丢弃的数据包数量（在Linux上使用<code>sysctl</code>来增加<code>net.core.netdev_budget</code>和/或<code>net.core.netdev_budget_usecs</code>来解决此问题）。有关识别和排除与网络驱动程序相关的问题的更多信息，请参阅<a href="https://access.redhat.com/sites/default/files/attachments/20150325_network_performance_tuning.pdf" target="_blank">Red Hat Enterprise Linux网络性能调整指南</a>。';
            else
                return '与网络接收工作相关的每个CPU核心SoftIRQs的统计信息。所有CPU核心的总计可以在<a href="#menu_system_submenu_softnet_stat">系统/softnet统计</a>中找到。';
        },
    },

    "go_expvar.memstats": {
        title: "内存统计",
        info: 'Go运行时内存统计。有关每个图表和值的更多信息，请参阅<a href="https://golang.org/pkg/runtime/#MemStats" target="_blank">runtime.MemStats</a>文档。',
    },

    "couchdb.dbactivity": {
        title: "数据库活动",
        info: "整个服务器的数据库读取和写入。这包括任何外部HTTP流量，以及在集群中执行的内部复制流量，以确保节点一致性。",
    },

    "couchdb.httptraffic": {
        title: "HTTP流量细分",
        info: "所有HTTP流量，按请求类型（<tt>GET</tt>、<tt>PUT</tt>、<tt>POST</tt>等）和响应状态码（<tt>200</tt>、<tt>201</tt>、<tt>4xx</tt>等）进行细分。<br/><br/>这里的任何<tt>5xx</tt>错误都表示可能是CouchDB的bug；请检查日志文件以获取更多信息。",
    },

    "couchdb.ops": {
        title: "服务器操作",
    },

    "couchdb.perdbstats": {
        title: "每个数据库统计",
        info: '每个数据库的统计信息。这包括每个数据库的<a href="http://docs.couchdb.org/en/latest/api/database/common.html#get--db">3个大小图表</a>：活跃（数据库中实时数据的大小）、外部（数据库内容的未压缩大小）和文件（磁盘上的文件大小，不包括任何视图和索引）。它还包括每个数据库的文档数量和已删除文档数量。',
    },

    "couchdb.erlang": {
        title: "Erlang统计",
        info: "有关托管CouchDB的Erlang VM状态的详细信息。这些信息仅供高级用户使用。峰值消息队列的高值（>10e6）通常表示超载条件。",
    },

    "ntpd.system": {
        title: "系统",
        info: '由readlist广告牌<code>ntpq -c rl</code>显示的系统变量统计。系统变量被分配为关联ID为零，并且也可以在readvar广告牌<code>ntpq -c "rv 0"</code>中显示。这些变量用于<a href="http://doc.ntp.org/current-stable/discipline.html">时钟纪律算法</a>，用于计算最低和最稳定的偏移量。',
    },

    "ntpd.peers": {
        title: "对等体",
        info: '每个在<code>/etc/ntp.conf</code>中配置的对等体的对等体变量统计，如<code>ntpq -c "rv &lt;association&gt;"</code>所示，而每个对等体都被分配一个非零的关联ID，如<code>ntpq -c "apeers"</code>所示。该模块定期扫描新/更改的对等体（默认：每60秒）。<b>ntpd</b>从可用的对等体中选择最佳的对等体来同步时钟。至少需要3个对等体才能正确识别最佳的对等体。',
    },
};

// ----------------------------------------------------------------------------
// chart

// information works on the context of a chart
// Its purpose is to set:
//
// info: the text above the charts
// heads: the representation of the chart at the top the subsection (second level menu)
// mainheads: the representation of the chart at the top of the section (first level menu)
// colors: the dimension colors of the chart (the default colors are appended)
// height: the ratio of the chart height relative to the default
//

var cgroupCPULimitIsSet = 0;
var cgroupMemLimitIsSet = 0;

netdataDashboard.context = {
    "system.cpu": {
        info: function (os) {
            void os;
            return (
                '总CPU利用率（所有核心）。 这里的100％意味着根本没有CPU空闲时间。 您可以在<a href="#menu_cpu">CPU</a>部分获取每个核心的使用情况，并在<a href="#menu_apps">应用程序监控</a>部分获取每个应用程序的使用情况。' +
                netdataDashboard.sparkline(
                    "<br/>注意 <b>iowait</b> ",
                    "system.cpu",
                    "iowait",
                    "%",
                    "。如果它一直很高，您的磁盘将成为瓶颈，并减慢系统速度。",
                ) +
                netdataDashboard.sparkline(
                    "<br/>一个值得关注的重要指标是 <b>softirq</b> ",
                    "system.cpu",
                    "softirq",
                    "%",
                    "。持续高百分比的softirq可能表明存在网络驱动程序问题。",
                )
            );
        },
        valueRange: "[0, 100]",
    },

    "system.load": {
        info: '当前系统负载，即正在使用CPU或等待系统资源（通常是CPU和磁盘）的进程数量。这3个指标分别是1、5和15分钟的平均值。系统每5秒计算一次。有关更多信息，请查看<a href="https://en.wikipedia.org/wiki/Load_(computing)" target="_blank">此维基百科文章</a>',
        height: 0.7,
    },

    "system.io": {
        info: function (os) {
            var s =
                '所有物理磁盘的总磁盘I/O。您可以在<a href="#menu_disk">磁盘</a>部分获取有关每个磁盘的详细信息，并在<a href="#menu_apps">应用程序监控</a>部分获取每个应用程序的磁盘使用情况。';

            if (os === "linux")
                return (
                    s +
                    " 物理磁盘是列在<code>/sys/block</code>中的所有磁盘，但不存在于<code>/sys/devices/virtual/block</code>中。"
                );
            else return s;
        },
    },

    "system.pgpgio": {
        info: "从/到磁盘的内存分页。这通常是系统的总磁盘I/O。",
    },

    "system.swapio": {
        info: "总交换I/O。（netdata测量<code>in</code>和<code>out</code>两者。如果图表中没有显示<code>in</code>或<code>out</code>中的任何一个指标，原因是该指标为零。- 您可以更改页面设置以始终在所有图表上呈现所有可用的维度）。",
    },

    "system.pgfaults": {
        info: '总页面错误。 <b>主要页面错误</b>表示系统正在使用其交换空间。您可以在<a href="#menu_apps">应用程序监控</a>部分找到使用交换空间的应用程序。',
    },

    "system.entropy": {
        colors: "#CC22AA",
        info: '<a href="https://en.wikipedia.org/wiki/Entropy_(computing)" target="_blank">熵</a>，是一个随机数池（<a href="https://en.wikipedia.org/wiki//dev/random" target="_blank">/dev/random</a>），主要用于密码学。如果熵池变空，需要随机数的进程可能会变得非常慢（这取决于每个程序使用的接口），等待池被补充。理想情况下，具有高熵需求的系统应该有一个专门的硬件设备（TPM是这样的设备之一）。您还可以安装几个仅软件的选项，如<code>haveged</code>，尽管这些通常只在服务器上有用。',
    },

    "system.forks": {
        colors: "#5555DD",
        info: "创建的新进程数。",
    },

    "system.intr": {
        colors: "#DD5555",
        info: 'CPU中断的总数。检查<code>system.interrupts</code>，该指标提供有关每个中断的更多详细信息，还可以在<a href="#menu_cpu">CPU</a>部分中分析每个CPU核心的中断。',
    },

    "system.interrupts": {
        info: '详细的CPU中断。在<a href="#menu_cpu">CPU</a>部分，中断按CPU核心进行分析。',
    },

    "system.softirqs": {
        info: '详细的CPU软中断。在<a href="#menu_cpu">CPU</a>部分，软中断按CPU核心进行分析。',
    },

    "system.processes": {
        info: "系统进程。 <b>运行</b>是CPU中的进程。 <b>阻塞</b>是愿意进入CPU但无法进入的进程，例如因为它们等待磁盘活动。",
    },

    "system.active_processes": {
        info: "所有系统进程。",
    },

    "system.ctxt": {
        info: '<a href="https://en.wikipedia.org/wiki/Context_switch" target="_blank">上下文切换</a>，是CPU从一个进程、任务或线程切换到另一个的过程。如果有许多进程或线程希望执行，而可用的CPU核心很少来处理它们，系统将进行更多的上下文切换以在它们之间平衡CPU资源。整个过程是计算密集型的。上下文切换越多，系统运行速度越慢。',
    },

    "system.idlejitter": {
        info: "netdata计算的空闲抖动。一个线程被创建，请求休眠几微秒。当系统唤醒它时，它测量了经过的微秒数。请求的休眠时间与实际休眠时间之间的差异，就是<b>空闲抖动</b>。这个数字在实时环境中很有用，其中CPU抖动可能会影响服务的质量（如VoIP媒体网关）。",
    },

    "system.net": {
        info: function (os) {
            var s =
                "所有物理网络接口的总带宽。这不包括<code>lo</code>、VPN、网络桥接、IFB设备、绑定接口等。只有物理网络接口的带宽被聚合。";

            if (os === "linux")
                return (
                    s +
                    " 物理网络接口是列在<code>/proc/net/dev</code>中的所有网络接口，但不存在于<code>/sys/devices/virtual/net</code>中。"
                );
            else return s;
        },
    },

    "system.ip": {
        info: "系统中的总IP流量。",
    },

    "system.ipv4": {
        info: "IPv4流量总量。",
    },

    "system.ipv6": {
        info: "IPv6流量总量。",
    },

    "system.ram": {
        info: "系统随机存取存储器（即物理内存）使用情况。",
    },

    "system.swap": {
        info: "系统交换内存使用情况。当物理内存（RAM）的数量已满时，将使用交换空间。当系统需要更多内存资源且RAM已满时，内存中的非活动页面将移至交换空间（通常是磁盘、磁盘分区或文件）。",
    },

    // ------------------------------------------------------------------------
    // CPU charts
    "cpu.cpu": {
        commonMin: true,
        commonMax: true,
        valueRange: "[0, 100]",
    },

    "cpu.interrupts": {
        commonMin: true,
        commonMax: true,
    },

    "cpu.softirqs": {
        commonMin: true,
        commonMax: true,
    },

    "cpu.softnet_stat": {
        commonMin: true,
        commonMax: true,
    },

    // ------------------------------------------------------------------------
    // 内存

    "mem.ksm_savings": {
        heads: [
            netdataDashboard.gaugeChart("已节省", "12%", "savings", "#0099CC"),
        ],
    },

    "mem.ksm_ratios": {
        heads: [
            function (os, id) {
                void os;
                return (
                    '<div data-netdata="' +
                    id +
                    '"' +
                    ' data-gauge-max-value="100"' +
                    ' data-chart-library="gauge"' +
                    ' data-title="节省"' +
                    ' data-units="百分比 %"' +
                    ' data-gauge-adjust="width"' +
                    ' data-width="12%"' +
                    ' data-before="0"' +
                    ' data-after="-CHART_DURATION"' +
                    ' data-points="CHART_DURATION"' +
                    ' role="application"></div>'
                );
            },
        ],
    },

    "mem.zram_usage": {
        info: "ZRAM总内存使用情况指标。ZRAM使用一些内存来存储有关存储内存页面的元数据，因此引入了与磁盘大小成比例的开销。它排除了相同元素填充页面，因为它们不分配内存。",
    },

    "mem.zram_savings": {
        info: "显示原始和压缩内存数据大小。",
    },

    "mem.zram_ratio": {
        heads: [
            netdataDashboard.gaugeChart("压缩比", "12%", "ratio", "#0099CC"),
        ],
        info: "压缩比，计算公式为<code>100 * 原始大小 / 压缩大小</code>。数值越大表示压缩效果越好，节省的内存也越多。",
    },

    "mem.zram_efficiency": {
        heads: [
            netdataDashboard.gaugeChart(
                "效率",
                "12%",
                "percent",
                NETDATA.colors[0],
            ),
        ],
        commonMin: true,
        commonMax: true,
        valueRange: "[0, 100]",
        info: "内存使用效率，计算公式为<code>100 * 压缩大小 / 总内存使用</code>。",
    },

    "mem.pgfaults": {
        info: "页面错误是一种中断类型，称为陷阱，当运行的程序访问映射到虚拟地址空间但实际未加载到主内存的内存页面时，由计算机硬件引发。如果在生成错误时页面已加载到内存，但未标记在内存管理单元中为已加载到内存，则称为<b>次要</b>或软页面错误。当系统需要从磁盘或交换内存加载内存页面时，将生成<b>主要</b>页面错误。",
    },

    "mem.committed": {
        colors: NETDATA.colors[3],
        info: "已提交内存是由进程分配的所有内存的总和。",
    },

    "mem.available": {
        info: "可用内存由内核估算，是指可以供用户空间进程使用的RAM数量，而不会导致交换。",
    },
    "mem.writeback": {
        info: "<b>Dirty</b>是等待写入磁盘的内存量。 <b>Writeback</b>是正在被写入磁盘的内存量。",
    },

    "mem.kernel": {
        info: "内核正在使用的总内存量。 <b>Slab</b>是内核用于缓存数据结构以供自身使用的内存量。 <b>KernelStack</b>是内核为每个任务分配的内存量。 <b>PageTables</b>是用于最低级页表的内存量（页表用于将虚拟地址转换为物理内存地址）。 <b>VmallocUsed</b>是作为虚拟地址空间使用的内存量。",
    },

    "mem.slab": {
        info: "<b>Reclaimable</b>是内核可以重用的内存量。 <b>Unreclaimable</b>是即使在内核缺乏内存时也无法重新使用的内存量。",
    },

    "mem.hugepages": {
        info: "专用（或直接）HugePages是为配置为利用大页的应用程序保留的内存。即使有可用的空闲hugepages，Hugepages也是<b>已使用</b>的内存。",
    },

    "mem.transparent_hugepages": {
        info: "透明大页（THP）是使用大页支持虚拟内存的，支持页面大小的自动提升和降级。它适用于所有匿名内存映射和tmpfs/shmem的应用程序。",
    },

    // ------------------------------------------------------------------------
    // 网络接口

    "net.drops": {
        info: '在网络接口级别丢弃的数据包。这些与<code>ifconfig</code>报告的相同计数器，如<code>RX dropped</code>（入站）和<code>TX dropped</code>（出站）。<b>入站</b>数据包可能由于<a href="#menu_system_submenu_softnet_stat">softnet backlog</a>溢出、错误/意外的VLAN标记、未知或未注册的协议、服务器未配置为IPv6时的IPv6帧而在网络接口级别丢弃。查看<a href="https://www.novell.com/support/kb/doc.php?id=7007165" target="_blank">此文档</a>获取更多信息。',
    },

    // ------------------------------------------------------------------------
    // IP

    "ip.inerrors": {
        info:
            "在接收IP数据包时遇到的错误。" +
            "<code>noroutes</code>（<code>InNoRoutes</code>）计算因为没有路由发送数据包而被丢弃的数据包数。" +
            "<code>truncated</code>（<code>InTruncatedPkts</code>）计算因数据报帧未携带足够数据而被丢弃的数据包数。" +
            "<code>checksum</code>（<code>InCsumErrors</code>）计算因校验和错误而被丢弃的数据包数。",
    },

    "ip.tcpmemorypressures": {
        info: "由于非致命内存分配失败而使套接字处于<b>内存压力</b>状态的次数（内核尝试通过减少发送缓冲区等方式解决此情况）。",
    },

    "ip.tcpconnaborts": {
        info: "TCP连接中止。 <b>baddata</b>（<code>TCPAbortOnData</code>）发生在连接处于<code>FIN_WAIT1</code>状态时，内核接收到一个序列号超出此连接的最后一个序列号的数据包 - 内核会以<code>RST</code>（关闭连接）做出响应。 <b>userclosed</b>（<code>TCPAbortOnClose</code>）发生在内核接收到已关闭连接上的数据并以<code>RST</code>做出响应时。 <b>nomemory</b>（<code>TCPAbortOnMemory</code>）发生在有太多的孤立套接字（未附加到fd）并且内核必须丢弃一个连接时 - 有时它会发送<code>RST</code>，有时不会。 <b>timeout</b>（<code>TCPAbortOnTimeout</code>）发生在连接超时时。 <b>linger</b>（<code>TCPAbortOnLinger</code>）发生在内核杀死一个已由应用程序关闭并且持续了足够长时间的套接字时。 <b>failed</b>（<code>TCPAbortFailed</code>）发生在内核尝试发送<code>RST</code>但因没有可用内存而失败时。",
    },

    "ip.tcp_syn_queue": {
        info:
            "内核的<b>SYN队列</b>跟踪TCP握手，直到连接完全建立。" +
            "当太多传入TCP连接请求停留在半开放状态且服务器未配置为回退到SYN cookies*时，它会溢出。" +
            "溢出通常是由SYN洪水DoS攻击引起的（即某人发送大量SYN数据包并且从不完成握手）。" +
            "<b>drops</b>（或<code>TcpExtTCPReqQFullDrop</code>）是因为SYN队列已满且未启用SYN cookies而丢弃的连接数。" +
            "<b>cookies</b>（或<code>TcpExtTCPReqQFullDoCookies</code>）是因为SYN队列已满而发送的SYN cookies数。",
    },

    "ip.tcp_accept_queue": {
        info:
            "内核的<b>接受队列</b>保存完全建立的TCP连接，等待被监听应用程序处理。" +
            "<b>overflows</b>（或<code>ListenOverflows</code>）是因为监听应用程序的接收队列已满而无法处理的建立连接数。" +
            "<b>drops</b>（或<code>ListenDrops</code>）是无法处理的传入连接数，包括SYN洪水、溢出、内存不足、安全问题、无法到达目的地的路由、接收相关ICMP消息、套接字是广播或组播。",
    },

    // ------------------------------------------------------------------------
    // IPv4

    "ipv4.tcpsock": {
        info: "已建立的TCP连接数（称为<code>CurrEstab</code>）。这是在测量时刻的已建立连接的快照（即在同一迭代中建立连接和断开连接的连接不会影响此指标）。",
    },

    "ipv4.tcpopens": {
        info:
            "<b>active</b>或<code>ActiveOpens</code>是此主机尝试的出站TCP<b>连接数</b>。" +
            " <b>passive</b>或<code>PassiveOpens</code>是此主机接受的入站TCP<b>连接数</b>。",
    },

    "ipv4.tcperrors": {
        info:
            "<code>InErrs</code>是接收到的错误TCP段数（包括头部太小、校验和错误、序列错误、坏数据包 - 适用于IPv4和IPv6）。" +
            " <code>InCsumErrors</code>是接收到的带有校验和错误的TCP段数（适用于IPv4和IPv6）。" +
            " <code>RetransSegs</code>是重传的TCP段数。",
    },

    "ipv4.tcphandshake": {
        info:
            "<code>EstabResets</code>是已建立连接重置的次数（即从<code>ESTABLISHED</code>或<code>CLOSE_WAIT</code>直接转换到<code>CLOSED</code>的连接）。" +
            " <code>OutRsts</code>是发送的带有<code>RST</code>标志的TCP段数（适用于IPv4和IPv6）。" +
            " <code>AttemptFails</code>是TCP连接直接从<code>SYN_SENT</code>或<code>SYN_RECV</code>转换到<code>CLOSED</code>的次数，加上TCP连接从<code>SYN_RECV</code>转换到<code>LISTEN</code>的次数。" +
            " <code>TCPSynRetrans</code>显示新出站TCP连接的重试，这可能表明一般的连接问题或远程主机的积压。",
    },

    // ------------------------------------------------------------------------
    // 应用程序

    "apps.cpu": {
        height: 2.0,
    },
    "apps.mem": {
        info: "应用程序使用的实际内存（RAM）。这不包括共享内存。",
    },

    "apps.vmem": {
        info: '应用程序分配的虚拟内存。请查看<a href="https://github.com/netdata/netdata/tree/master/daemon#virtual-memory" target="_blank">这篇文章</a>获取更多信息。',
    },

    "apps.preads": {
        height: 2.0,
    },

    "apps.pwrites": {
        height: 2.0,
    },

    "apps.uptime": {
        info: "Netdata重启后进程组的运行时间。在该时间段内，至少有一个进程在该组中运行。",
    },

    // ------------------------------------------------------------------------
    // USERS

    "users.cpu": {
        height: 2.0,
    },

    "users.mem": {
        info: "每个用户使用的实际内存（RAM）。这不包括共享内存。",
    },

    "users.vmem": {
        info: '每个用户分配的虚拟内存。请查看<a href="https://github.com/netdata/netdata/tree/master/daemon#virtual-memory" target="_blank">这篇文章</a>获取更多信息。',
    },

    "users.preads": {
        height: 2.0,
    },

    "users.pwrites": {
        height: 2.0,
    },

    "users.uptime": {
        info: "Netdata重启后进程组的运行时间。在该时间段内，至少有一个进程在该组中运行。",
    },

    // ------------------------------------------------------------------------
    // GROUPS

    "groups.cpu": {
        height: 2.0,
    },

    "groups.mem": {
        info: "每个用户组使用的实际内存（RAM）。这不包括共享内存。",
    },

    "groups.vmem": {
        info: '自Netdata重启以来每个用户组分配的虚拟内存。请查看<a href="https://github.com/netdata/netdata/tree/master/daemon#virtual-memory" target="_blank">这篇文章</a>获取更多信息。',
    },

    "groups.preads": {
        height: 2.0,
    },

    "groups.pwrites": {
        height: 2.0,
    },

    "groups.uptime": {
        info: "进程组的运行时间。在该时间段内，至少有一个进程在该组中运行。",
    },

    // ------------------------------------------------------------------------
    // NETWORK QoS

    "tc.qos": {
        heads: [
            function (os, id) {
                void os;

                if (id.match(/.*-ifb$/))
                    return netdataDashboard.gaugeChart(
                        "入站",
                        "12%",
                        "",
                        "#5555AA",
                    );
                else
                    return netdataDashboard.gaugeChart(
                        "出站",
                        "12%",
                        "",
                        "#AA9900",
                    );
            },
        ],
    },

    // ------------------------------------------------------------------------
    // NETWORK INTERFACES

    "net.net": {
        mainheads: [
            function (os, id) {
                void os;
                if (id.match(/^cgroup_.*/)) {
                    var iface;
                    try {
                        iface =
                            " " +
                            id.substring(
                                id.lastIndexOf(".net_") + 5,
                                id.length,
                            );
                    } catch (e) {
                        iface = "";
                    }
                    return netdataDashboard.gaugeChart(
                        "接收" + iface,
                        "12%",
                        "接收",
                    );
                } else return "";
            },
            function (os, id) {
                void os;
                if (id.match(/^cgroup_.*/)) {
                    var iface;
                    try {
                        iface =
                            " " +
                            id.substring(
                                id.lastIndexOf(".net_") + 5,
                                id.length,
                            );
                    } catch (e) {
                        iface = "";
                    }
                    return netdataDashboard.gaugeChart(
                        "发送" + iface,
                        "12%",
                        "发送",
                    );
                } else return "";
            },
        ],
        heads: [
            function (os, id) {
                void os;
                if (!id.match(/^cgroup_.*/))
                    return netdataDashboard.gaugeChart("接收", "12%", "接收");
                else return "";
            },
            function (os, id) {
                void os;
                if (!id.match(/^cgroup_.*/))
                    return netdataDashboard.gaugeChart("发送", "12%", "发送");
                else return "";
            },
        ],
    },
    // ------------------------------------------------------------------------
    // NETFILTER

    "netfilter.sockets": {
        colors: "#88AA00",
        heads: [netdataDashboard.gaugeChart("活跃连接", "12%", "", "#88AA00")],
    },

    "netfilter.new": {
        heads: [netdataDashboard.gaugeChart("新连接", "12%", "new", "#5555AA")],
    },

    // ------------------------------------------------------------------------
    // DISKS

    "disk.util": {
        colors: "#FF5588",
        heads: [netdataDashboard.gaugeChart("利用率", "12%", "", "#FF5588")],
        info: "磁盘利用率衡量磁盘忙于某项任务的时间。这与其性能无关。100%表示系统始终有一个未完成的磁盘操作。请记住，根据磁盘的底层技术，这里的100%可能或可能不是拥塞的指示。",
    },

    "disk.backlog": {
        colors: "#0099CC",
        info: "积压是挂起磁盘操作的持续时间指示。在每个I/O事件上，系统将自上次更新此字段以来的I/O时间与挂起操作的数量相乘。虽然不准确，但此指标可以提供进行中操作的预期完成时间的指示。",
    },

    "disk.io": {
        heads: [
            netdataDashboard.gaugeChart("读取", "12%", "读取"),
            netdataDashboard.gaugeChart("写入", "12%", "写入"),
        ],
        info: "数据传输到磁盘和从磁盘传输的量。",
    },

    "disk.ops": {
        info: "已完成的磁盘I/O操作。请记住，请求的操作数量可能更高，因为系统能够合并相邻的操作（请参阅合并操作图表）。",
    },

    "disk.qops": {
        info: "当前正在进行的I/O操作。此指标是一个快照 - 它不是上一个间隔的平均值。",
    },

    "disk.iotime": {
        height: 0.5,
        info: "所有已完成I/O操作的持续时间总和。如果磁盘能够并行执行I/O操作，此数字可能超过间隔。",
    },
    "disk.mops": {
        height: 0.5,
        info: "合并的磁盘操作数量。系统能够合并相邻的I/O操作，例如两个4KB读取可以在传递给磁盘之前变成一个8KB读取。",
    },
    "disk.svctm": {
        height: 0.5,
        info: "已完成I/O操作的平均服务时间。此指标是使用磁盘的总繁忙时间和已完成操作的数量计算的。如果磁盘能够执行多个并行操作，则报告的平均服务时间将是误导性的。",
    },
    "disk.avgsz": {
        height: 0.5,
        info: "平均I/O操作大小。",
    },
    "disk.await": {
        height: 0.5,
        info: "发往设备的I/O请求被服务的平均时间。这包括请求在队列中花费的时间和为其提供服务的时间。",
    },

    "disk.space": {
        info: "磁盘空间利用率。系统自动为根用户保留的空间，以防止根用户的空间不足。",
    },
    "disk.inodes": {
        info: "inodes（或索引节点）是文件系统对象（例如文件和目录）。在许多类型的文件系统实现中，inodes的最大数量在文件系统创建时被固定，限制了文件系统可以容纳的最大文件数量。设备可能会用完inodes。发生这种情况时，即使可能有可用空间，也无法在设备上创建新文件。",
    },

    "mysql.net": {
        info: "发送到mysql客户端的数据量（<strong>出</strong>）和从mysql客户端接收的数据量（<strong>入</strong>）。",
    },

    // ------------------------------------------------------------------------
    // MYSQL

    "mysql.queries": {
        info:
            "服务器执行的语句数量。<ul>" +
            "<li><strong>queries</strong> 计算存储的SQL程序中执行的语句。</li>" +
            "<li><strong>questions</strong> 计算由mysql客户端发送到mysql服务器的语句。</li>" +
            '<li><strong>slow queries</strong> 计算花费超过<a href="http://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_long_query_time" target="_blank">long_query_time</a>秒执行的语句。' +
            '有关慢查询的更多信息，请查看mysql <a href="http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html" target="_blank">慢查询日志</a>。</li>' +
            "</ul>",
    },

    "mysql.handlers": {
        info:
            "mysql内部处理程序的使用情况。此图表非常好地展示了mysql服务器实际在做什么。" +
            "（如果图表未显示所有这些维度，那是因为它们为零 - 从仪表板设置中设置<strong>要显示哪些维度？</strong>为<strong>全部</strong>，以呈现甚至零值）<ul>" +
            '<li><strong>commit</strong>，内部<a href="http://dev.mysql.com/doc/refman/5.7/en/commit.html" target="_blank">COMMIT</a>语句的数量。</li>' +
            "<li><strong>delete</strong>，从表中删除行的次数。</li>" +
            "<li><strong>prepare</strong>，两阶段提交操作的准备阶段的计数器。</li>" +
            "<li><strong>read first</strong>，读取索引中第一个条目的次数。高值表明服务器正在进行大量的完整索引扫描；例如：<strong>SELECT col1 FROM foo</strong>，其中col1已建立索引。</li>" +
            "<li><strong>read key</strong>，基于键的请求读取行的次数。如果此值很高，则很好地表明您的查询已针对您的查询正确地建立了索引。</li>" +
            "<li><strong>read next</strong>，请求按键顺序读取下一行的次数。如果您正在查询具有范围约束的索引列，或者正在进行索引扫描，则会增加此值。</li>" +
            "<li><strong>read prev</strong>，请求按键顺序读取前一行的次数。此读取方法主要用于优化<strong>ORDER BY ... DESC</strong>。</li>" +
            "<li><strong>read rnd</strong>，基于固定位置的请求读取行的次数。高值表明您正在执行需要对结果进行排序的大量查询。您可能有很多需要MySQL扫描整个表的查询，或者您的连接未正确使用键。</li>" +
            "<li><strong>read rnd next</strong>，请求读取数据文件中下一行的次数。如果您正在进行大量的表扫描，则此值很高。通常，这表明您的表未正确建立索引，或者您的查询未编写以利用您拥有的索引。</li>" +
            "<li><strong>rollback</strong>，存储引擎执行回滚操作的次数。</li>" +
            "<li><strong>savepoint</strong>，存储引擎放置保存点的次数。</li>" +
            "<li><strong>savepoint rollback</strong>，存储引擎回滚到保存点的次数。</li>" +
            "<li><strong>update</strong>，更新表中行的请求次数。</li>" +
            "<li><strong>write</strong>，向表中插入行的请求次数。</li>" +
            "</ul>",
    },

    "mysql.table_locks": {
        info:
            "MySQL表锁计数器：<ul>" +
            "<li><strong>immediate</strong>，立即授予表锁的次数。</li>" +
            "<li><strong>waited</strong>，无法立即授予表锁并且需要等待的次数。如果此值很高且您遇到性能问题，则应首先优化查询，然后要么拆分表或表，要么使用复制。</li>" +
            "</ul>",
    },

    "mysql.innodb_deadlocks": {
        info: '当两个或更多事务相互持有并请求锁时，会发生死锁，从而创建依赖关系循环。有关<a href="https://dev.mysql.com/doc/refman/5.7/en/innodb-deadlocks-handling.html" target="_blank">如何最小化和处理死锁</a>的更多信息。',
    },

    "mysql.galera_cluster_status": {
        info:
            "<code>-1</code>: 未知, " +
            "<code>0</code>: 主要（主要组配置，存在法定人数）, " +
            "<code>1</code>: 非主要（非主要组配置，法定人数丢失）, " +
            "<code>2</code>: 断开连接（未连接到组，正在重试）。",
    },

    "mysql.galera_cluster_state": {
        info:
            "<code>0</code>: 未定义, " +
            "<code>1</code>: 加入, " +
            "<code>2</code>: 提供者/解同步, " +
            "<code>3</code>: 已加入, " +
            "<code>4</code>: 已同步。",
    },

    "mysql.galera_cluster_weight": {
        info: "该值被计算为当前主要组中节点的<code>pc.weight</code>之和。",
    },

    "mysql.galera_connected": {
        info:
            "<code>0</code> 表示节点尚未连接到任何集群组件。 " +
            "这可能是由于错误的配置。",
    },

    "mysql.open_transactions": {
        info:
            "本地运行事务的数量，这些事务已在wsrep提供程序内注册。 " +
            "这意味着已进行了导致写入集合填充发生的操作的事务。 " +
            "只计算只读事务。",
    },

    // ------------------------------------------------------------------------
    // POSTGRESQL

    "postgres.db_stat_blks": {
        info:
            "从磁盘或缓存中读取块。<ul>" +
            "<li><strong>blks_read:</strong> 在此数据库中读取的磁盘块数。</li>" +
            "<li><strong>blks_hit:</strong> 磁盘块已在缓冲区缓存中找到的次数，因此不需要读取（这仅包括在PostgreSQL缓冲区缓存中的命中，而不是操作系统的文件系统缓存）</li>" +
            "</ul>",
    },
    "postgres.db_stat_tuple_write": {
        info:
            "<ul><li>插入/更新/删除的行数。</li>" +
            '<li><strong>冲突:</strong> 由于与此数据库中恢复冲突而取消的查询次数。（冲突仅在备用服务器上发生；有关详细信息，请参见<a href="https://www.postgresql.org/docs/10/static/monitoring-stats.html#PG-STAT-DATABASE-CONFLICTS-VIEW" target="_blank">pg_stat_database_conflicts</a>。）</li>' +
            "</ul>",
    },
    "postgres.db_stat_temp_bytes": {
        info: "可以为排序、哈希和临时查询结果在磁盘上创建临时文件。",
    },
    "postgres.db_stat_temp_files": {
        info:
            "<ul>" +
            "<li><strong>files:</strong> 查询创建的临时文件数。计算所有临时文件的数量，无论为何创建临时文件（例如，排序或哈希）。</li>" +
            "</ul>",
    },
    "postgres.archive_wal": {
        info:
            "WAL归档。<ul>" +
            "<li><strong>total:</strong> 总文件数。</li>" +
            "<li><strong>ready:</strong> 等待归档的WAL。</li>" +
            "<li><strong>done:</strong> 成功归档的WAL。 " +
            '准备好的WAL可能表示archive_command存在错误，请参见<a href="https://www.postgresql.org/docs/current/static/continuous-archiving.html" target="_blank">连续归档和时间点恢复</a>。</li>' +
            "</ul>",
    },
    "postgres.checkpointer": {
        info:
            "检查点的数量。<ul>" +
            "<li><strong>scheduled:</strong> 当达到checkpoint_timeout时。</li>" +
            "<li><strong>requested:</strong> 当达到max_wal_size时。</li>" +
            "</ul>" +
            '更多信息请参见<a href="https://www.postgresql.org/docs/current/static/wal-configuration.html" target="_blank">WAL配置</a>。',
    },
    "postgres.autovacuum": {
        info:
            "PostgreSQL数据库需要定期维护，称为清理。 对于许多安装，让清理由autovacuum守护程序执行就足够了。 " +
            '更多信息请参见<a href="https://www.postgresql.org/docs/current/static/routine-vacuuming.html#AUTOVACUUM" target="_blank">自动清理守护程序</a>。',
    },
    "postgres.standby_delta": {
        info:
            "流复制增量。<ul>" +
            "<li><strong>sent_delta:</strong> 发送到备用的复制增量。</li>" +
            "<li><strong>write_delta:</strong> 由此备用服务器写入磁盘的复制增量。</li>" +
            "<li><strong>flush_delta:</strong> 由此备用服务器刷新到磁盘的复制增量。</li>" +
            "<li><strong>replay_delta:</strong> 在此备用服务器上回放到数据库的复制增量。</li>" +
            "</ul>" +
            '更多信息请参见<a href="https://www.postgresql.org/docs/current/static/warm-standby.html#SYNCHRONOUS-REPLICATION" target="_blank">同步复制</a>。',
    },
    "postgres.replication_slot": {
        info:
            "复制槽文件。<ul>" +
            "<li><strong>wal_keeped:</strong> 每个复制槽保留的WAL文件。</li>" +
            "<li><strong>pg_replslot_files:</strong> 存在于pg_replslot中的文件。</li>" +
            "</ul>" +
            '更多信息请参见<a href="https://www.postgresql.org/docs/current/static/warm-standby.html#STREAMING-REPLICATION-SLOTS" target="_blank">复制槽</a>。',
    },

    // ------------------------------------------------------------------------
    // APACHE

    "apache.connections": {
        colors: NETDATA.colors[4],
        mainheads: [
            netdataDashboard.gaugeChart("连接数", "12%", "", NETDATA.colors[4]),
        ],
    },

    "apache.requests": {
        colors: NETDATA.colors[0],
        mainheads: [
            netdataDashboard.gaugeChart("请求", "12%", "", NETDATA.colors[0]),
        ],
    },
    "apache.net": {
        colors: NETDATA.colors[3],
        mainheads: [
            netdataDashboard.gaugeChart("带宽", "12%", "", NETDATA.colors[3]),
        ],
    },

    "apache.workers": {
        mainheads: [
            function (os, id) {
                void os;
                return (
                    '<div data-netdata="' +
                    id +
                    '"' +
                    ' data-dimensions="busy"' +
                    ' data-append-options="percentage"' +
                    ' data-gauge-max-value="100"' +
                    ' data-chart-library="gauge"' +
                    ' data-title="工作进程利用率"' +
                    ' data-units="百分比 %"' +
                    ' data-gauge-adjust="width"' +
                    ' data-width="12%"' +
                    ' data-before="0"' +
                    ' data-after="-CHART_DURATION"' +
                    ' data-points="CHART_DURATION"' +
                    ' role="application"></div>'
                );
            },
        ],
    },

    "apache.bytesperreq": {
        colors: NETDATA.colors[3],
        height: 0.5,
    },

    "apache.reqpersec": {
        colors: NETDATA.colors[4],
        height: 0.5,
    },

    "apache.bytespersec": {
        colors: NETDATA.colors[6],
        height: 0.5,
    },

    // ------------------------------------------------------------------------
    // LIGHTTPD

    "lighttpd.connections": {
        colors: NETDATA.colors[4],
        mainheads: [
            netdataDashboard.gaugeChart("连接数", "12%", "", NETDATA.colors[4]),
        ],
    },

    "lighttpd.requests": {
        colors: NETDATA.colors[0],
        mainheads: [
            netdataDashboard.gaugeChart("请求数", "12%", "", NETDATA.colors[0]),
        ],
    },

    "lighttpd.net": {
        colors: NETDATA.colors[3],
        mainheads: [
            netdataDashboard.gaugeChart("带宽", "12%", "", NETDATA.colors[3]),
        ],
    },

    "lighttpd.workers": {
        mainheads: [
            function (os, id) {
                void os;
                return (
                    '<div data-netdata="' +
                    id +
                    '"' +
                    ' data-dimensions="busy"' +
                    ' data-append-options="percentage"' +
                    ' data-gauge-max-value="100"' +
                    ' data-chart-library="gauge"' +
                    ' data-title="服务器利用率"' +
                    ' data-units="百分比 %"' +
                    ' data-gauge-adjust="width"' +
                    ' data-width="12%"' +
                    ' data-before="0"' +
                    ' data-after="-CHART_DURATION"' +
                    ' data-points="CHART_DURATION"' +
                    ' role="application"></div>'
                );
            },
        ],
    },

    "lighttpd.bytesperreq": {
        colors: NETDATA.colors[3],
        height: 0.5,
    },

    "lighttpd.reqpersec": {
        colors: NETDATA.colors[4],
        height: 0.5,
    },

    "lighttpd.bytespersec": {
        colors: NETDATA.colors[6],
        height: 0.5,
    },
    // ------------------------------------------------------------------------
    // NGINX

    "nginx.connections": {
        colors: NETDATA.colors[4],
        mainheads: [
            netdataDashboard.gaugeChart("连接数", "12%", "", NETDATA.colors[4]),
        ],
    },

    "nginx.requests": {
        colors: NETDATA.colors[0],
        mainheads: [
            netdataDashboard.gaugeChart(
                "请求次数",
                "12%",
                "",
                NETDATA.colors[0],
            ),
        ],
    },

    // ------------------------------------------------------------------------
    // HTTP check

    "httpcheck.responsetime": {
        info: "响应时间描述了请求和响应之间经过的时间。目前，响应时间的准确性较低，仅应作为参考。",
    },

    "httpcheck.responselength": {
        info: "响应长度统计响应主体中的字符数。对于静态页面，这应该是基本恒定的。",
    },

    "httpcheck.status": {
        valueRange: "[0, 1]",
        info:
            "此图表验证了Web服务器的响应。如果触发，每个状态维度将具有值<code>1</code>。" +
            "仅当满足所有约束时，维度<code>success</code>才为<code>1</code>。" +
            "此图表对于警报或第三方应用程序最有用。",
    },

    // ------------------------------------------------------------------------
    // NETDATA

    "netdata.response_time": {
        info: "netdata API响应时间衡量了netdata提供请求所需的时间。此时间包括一切，从请求的第一个字节的接收到其回复的最后一个字节的发送，因此它包括所有涉及的网络延迟（即慢速网络上的客户端将影响这些指标）。",
    },

    // ------------------------------------------------------------------------
    // RETROSHARE

    "retroshare.bandwidth": {
        info: "RetroShare的入站和出站流量。",
        mainheads: [
            netdataDashboard.gaugeChart("接收", "12%", "bandwidth_down_kb"),
            netdataDashboard.gaugeChart("发送", "12%", "bandwidth_up_kb"),
        ],
    },

    "retroshare.peers": {
        info: "（已连接的）RetroShare好友数量。",
        mainheads: [
            function (os, id) {
                void os;
                return (
                    '<div data-netdata="' +
                    id +
                    '"' +
                    ' data-dimensions="peers_connected"' +
                    ' data-append-options="friends"' +
                    ' data-chart-library="easypiechart"' +
                    ' data-title="已连接的好友"' +
                    ' data-units=""' +
                    ' data-width="8%"' +
                    ' data-before="0"' +
                    ' data-after="-CHART_DURATION"' +
                    ' data-points="CHART_DURATION"' +
                    ' role="application"></div>'
                );
            },
        ],
    },

    "retroshare.dht": {
        info: "关于RetroShare的DHT的统计信息。这些值是估计的！",
    },

    // ------------------------------------------------------------------------
    // fping

    "fping.quality": {
        colors: NETDATA.colors[10],
        height: 0.5,
    },

    "fping.packets": {
        height: 0.5,
    },

    // ------------------------------------------------------------------------
    // containers

    "cgroup.cpu_limit": {
        valueRange: "[0, null]",
        mainheads: [
            function (os, id) {
                void os;
                cgroupCPULimitIsSet = 1;
                return (
                    '<div data-netdata="' +
                    id +
                    '"' +
                    ' data-dimensions="used"' +
                    ' data-gauge-max-value="100"' +
                    ' data-chart-library="gauge"' +
                    ' data-title="CPU"' +
                    ' data-units="%"' +
                    ' data-gauge-adjust="width"' +
                    ' data-width="12%"' +
                    ' data-before="0"' +
                    ' data-after="-CHART_DURATION"' +
                    ' data-points="CHART_DURATION"' +
                    ' data-colors="' +
                    NETDATA.colors[4] +
                    '"' +
                    ' role="application"></div>'
                );
            },
        ],
    },

    "cgroup.cpu": {
        mainheads: [
            function (os, id) {
                void os;
                if (cgroupCPULimitIsSet === 0) {
                    return (
                        '<div data-netdata="' +
                        id +
                        '"' +
                        ' data-chart-library="gauge"' +
                        ' data-title="CPU"' +
                        ' data-units="%"' +
                        ' data-gauge-adjust="width"' +
                        ' data-width="12%"' +
                        ' data-before="0"' +
                        ' data-after="-CHART_DURATION"' +
                        ' data-points="CHART_DURATION"' +
                        ' data-colors="' +
                        NETDATA.colors[4] +
                        '"' +
                        ' role="application"></div>'
                    );
                } else return "";
            },
        ],
    },

    "cgroup.mem_usage_limit": {
        mainheads: [
            function (os, id) {
                void os;
                cgroupMemLimitIsSet = 1;
                return (
                    '<div data-netdata="' +
                    id +
                    '"' +
                    ' data-dimensions="used"' +
                    ' data-append-options="percentage"' +
                    ' data-gauge-max-value="100"' +
                    ' data-chart-library="gauge"' +
                    ' data-title="Memory"' +
                    ' data-units="%"' +
                    ' data-gauge-adjust="width"' +
                    ' data-width="12%"' +
                    ' data-before="0"' +
                    ' data-after="-CHART_DURATION"' +
                    ' data-points="CHART_DURATION"' +
                    ' data-colors="' +
                    NETDATA.colors[1] +
                    '"' +
                    ' role="application"></div>'
                );
            },
        ],
    },

    "cgroup.mem_usage": {
        mainheads: [
            function (os, id) {
                void os;
                if (cgroupMemLimitIsSet === 0) {
                    return (
                        '<div data-netdata="' +
                        id +
                        '"' +
                        ' data-chart-library="gauge"' +
                        ' data-title="Memory"' +
                        ' data-units="MB"' +
                        ' data-gauge-adjust="width"' +
                        ' data-width="12%"' +
                        ' data-before="0"' +
                        ' data-after="-CHART_DURATION"' +
                        ' data-points="CHART_DURATION"' +
                        ' data-colors="' +
                        NETDATA.colors[1] +
                        '"' +
                        ' role="application"></div>'
                    );
                } else return "";
            },
        ],
    },

    "cgroup.throttle_io": {
        mainheads: [
            function (os, id) {
                void os;
                return (
                    '<div data-netdata="' +
                    id +
                    '"' +
                    ' data-dimensions="read"' +
                    ' data-chart-library="gauge"' +
                    ' data-title="Read Disk I/O"' +
                    ' data-units="KB/s"' +
                    ' data-gauge-adjust="width"' +
                    ' data-width="12%"' +
                    ' data-before="0"' +
                    ' data-after="-CHART_DURATION"' +
                    ' data-points="CHART_DURATION"' +
                    ' data-colors="' +
                    NETDATA.colors[2] +
                    '"' +
                    ' role="application"></div>'
                );
            },
            function (os, id) {
                void os;
                return (
                    '<div data-netdata="' +
                    id +
                    '"' +
                    ' data-dimensions="write"' +
                    ' data-chart-library="gauge"' +
                    ' data-title="Write Disk I/O"' +
                    ' data-units="KB/s"' +
                    ' data-gauge-adjust="width"' +
                    ' data-width="12%"' +
                    ' data-before="0"' +
                    ' data-after="-CHART_DURATION"' +
                    ' data-points="CHART_DURATION"' +
                    ' data-colors="' +
                    NETDATA.colors[3] +
                    '"' +
                    ' role="application"></div>'
                );
            },
        ],
    },

    // ------------------------------------------------------------------------
    // beanstalkd
    // system charts
    "beanstalk.cpu_usage": {
        info: "beanstalkd使用的用户和系统CPU时间。",
    },

    // 这也是每个tube的统计数据
    "beanstalk.jobs_rate": {
        info: "beanstalkd处理的作业速率。",
    },

    "beanstalk.connections_rate": {
        info: "beanstalkd打开的连接速率。",
    },

    "beanstalk.commands_rate": {
        info: "beanstalkd接收的命令速率。",
    },

    "beanstalk.current_tubes": {
        info: "服务器上当前tube的总数，包括默认tube（始终存在）。",
    },

    "beanstalk.current_jobs": {
        info: "所有tube中作业的当前数量，按状态分组：紧急，准备，保留，延迟和埋藏。",
    },

    "beanstalk.current_connections": {
        info: "按连接类型分组的当前连接数：写入，生产者，工作者，等待。",
    },

    "beanstalk.binlog": {
        info: "记录写入binlog并作为压缩的一部分迁移的速率。",
    },

    "beanstalk.uptime": {
        info: "beanstalkd服务器已经运行的总时间。",
    },

    // 管道图表
    "beanstalk.jobs": {
        info: "当前管道中按状态分组的作业数量：紧急、就绪、保留、延迟和已埋。",
    },

    "beanstalk.connections": {
        info: "连接到此管道的当前连接数，按连接类型分组；使用中、等待中和观察中。",
    },

    "beanstalk.commands": {
        info: "beanstalkd执行的delete和pause命令的速率。",
    },

    "beanstalk.pause": {
        info: "显示管道暂停的持续时间以及暂停剩余的时间。",
    },

    // ------------------------------------------------------------------------
    // ceph

    "ceph.general_usage": {
        info: "所有ceph集群中的使用情况和可用空间。",
    },

    "ceph.general_objects": {
        info: "存储在ceph集群中的对象总数。",
    },

    "ceph.general_bytes": {
        info: "每秒的集群读取和写入数据。",
    },

    "ceph.general_operations": {
        info: "每秒的读取和写入操作次数。",
    },

    "ceph.general_latency": {
        info: "所有OSD中应用和提交延迟的总和。应用延迟是将更新刷新到磁盘所花费的总时间。提交延迟是将操作提交到日志的总时间。",
    },

    "ceph.pool_usage": {
        info: "每个池中的使用空间。",
    },

    "ceph.pool_objects": {
        info: "每个池中存在的对象数量。",
    },

    "ceph.pool_read_bytes": {
        info: "每个池中每秒的读取数据速率。",
    },

    "ceph.pool_write_bytes": {
        info: "每个池中每秒的写入数据速率。",
    },

    "ceph.pool_read_objects": {
        info: "每个池中每秒的读取对象数量。",
    },

    "ceph.pool_write_objects": {
        info: "每个池中每秒的写入对象数量。",
    },

    "ceph.osd_usage": {
        info: "每个OSD中的使用空间。",
    },

    "ceph.apply_latency": {
        info: "在每个OSD中刷新更新所花费的时间。",
    },

    "ceph.commit_latency": {
        info: "在每个OSD中提交操作到日志所花费的时间。",
    },

    // ------------------------------------------------------------------------
    // web_log

    "web_log.response_statuses": {
        info: "按类型的Web服务器响应。<code>success</code>包括<b>1xx</b>、<b>2xx</b>、<b>304</b>和<b>401</b>，<code>error</code>包括<b>5xx</b>，<code>redirect</code>包括<b>3xx</b>（不包括<b>304</b>），<code>bad</code>包括<b>4xx</b>（不包括<b>401</b>），<code>other</code>是所有其他响应。",
        mainheads: [
            function (os, id) {
                void os;
                return (
                    '<div data-netdata="' +
                    id +
                    '"' +
                    ' data-dimensions="success"' +
                    ' data-chart-library="gauge"' +
                    ' data-title="成功"' +
                    ' data-units="请求/秒"' +
                    ' data-gauge-adjust="width"' +
                    ' data-width="12%"' +
                    ' data-before="0"' +
                    ' data-after="-CHART_DURATION"' +
                    ' data-points="CHART_DURATION"' +
                    ' data-common-max="' +
                    id +
                    '"' +
                    ' data-colors="' +
                    NETDATA.colors[0] +
                    '"' +
                    ' data-decimal-digits="0"' +
                    ' role="application"></div>'
                );
            },

            function (os, id) {
                void os;
                return (
                    '<div data-netdata="' +
                    id +
                    '"' +
                    ' data-dimensions="redirect"' +
                    ' data-chart-library="gauge"' +
                    ' data-title="重定向"' +
                    ' data-units="请求/秒"' +
                    ' data-gauge-adjust="width"' +
                    ' data-width="12%"' +
                    ' data-before="0"' +
                    ' data-after="-CHART_DURATION"' +
                    ' data-points="CHART_DURATION"' +
                    ' data-common-max="' +
                    id +
                    '"' +
                    ' data-colors="' +
                    NETDATA.colors[2] +
                    '"' +
                    ' data-decimal-digits="0"' +
                    ' role="application"></div>'
                );
            },

            function (os, id) {
                void os;
                return (
                    '<div data-netdata="' +
                    id +
                    '"' +
                    ' data-dimensions="bad"' +
                    ' data-chart-library="gauge"' +
                    ' data-title="错误请求"' +
                    ' data-units="请求/秒"' +
                    ' data-gauge-adjust="width"' +
                    ' data-width="12%"' +
                    ' data-before="0"' +
                    ' data-after="-CHART_DURATION"' +
                    ' data-points="CHART_DURATION"' +
                    ' data-common-max="' +
                    id +
                    '"' +
                    ' data-colors="' +
                    NETDATA.colors[3] +
                    '"' +
                    ' data-decimal-digits="0"' +
                    ' role="application"></div>'
                );
            },

            function (os, id) {
                void os;
                return (
                    '<div data-netdata="' +
                    id +
                    '"' +
                    ' data-dimensions="error"' +
                    ' data-chart-library="gauge"' +
                    ' data-title="服务器错误"' +
                    ' data-units="请求/秒"' +
                    ' data-gauge-adjust="width"' +
                    ' data-width="12%"' +
                    ' data-before="0"' +
                    ' data-after="-CHART_DURATION"' +
                    ' data-points="CHART_DURATION"' +
                    ' data-common-max="' +
                    id +
                    '"' +
                    ' data-colors="' +
                    NETDATA.colors[1] +
                    '"' +
                    ' data-decimal-digits="0"' +
                    ' role="application"></div>'
                );
            },
        ],
    },

    "web_log.response_codes": {
        info: '按代码系列的Web服务器响应。根据标准，<code>1xx</code>是信息性响应，<code>2xx</code>是成功响应，<code>3xx</code>是重定向（尽管包括<b>304</b>，用作“未修改”），<code>4xx</code>是错误请求，<code>5xx</code>是内部服务器错误，<code>other</code>是非标准响应，<code>unmatched</code>计算日志文件中未被插件匹配的行数（<a href="https://github.com/netdata/netdata/issues/new?title=web_log%20reports%20unmatched%20lines&body=web_log%20plugin%20reports%20unmatched%20lines.%0A%0AThis%20is%20my%20log:%0A%0A%60%60%60txt%0A%0Aplease%20paste%20your%20web%20server%20log%20here%0A%0A%60%60%60" target="_blank">如果有任何未匹配的情况，请告诉我们</a>）。',
    },

    "web_log.response_time": {
        mainheads: [
            function (os, id) {
                void os;
                return (
                    '<div data-netdata="' +
                    id +
                    '"' +
                    ' data-dimensions="avg"' +
                    ' data-chart-library="gauge"' +
                    ' data-title="平均响应时间"' +
                    ' data-units="毫秒"' +
                    ' data-gauge-adjust="width"' +
                    ' data-width="12%"' +
                    ' data-before="0"' +
                    ' data-after="-CHART_DURATION"' +
                    ' data-points="CHART_DURATION"' +
                    ' data-colors="' +
                    NETDATA.colors[4] +
                    '"' +
                    ' data-decimal-digits="2"' +
                    ' role="application"></div>'
                );
            },
        ],
    },

    "web_log.detailed_response_codes": {
        info: "每个响应代码的响应次数。",
    },

    "web_log.requests_per_ipproto": {
        info: "每个IP协议版本接收的Web服务器请求。",
    },

    "web_log.clients": {
        info: "访问Web服务器的唯一客户端IP，在每个数据收集迭代中。如果数据收集是<b>每秒</b>，则此图表显示<b>每秒的唯一客户端IP</b>。",
    },

    "web_log.clients_all": {
        info: '自netdata上次重启以来访问Web服务器的唯一客户端IP。此插件在内存中保存所有访问Web服务器的唯一IP。在非常繁忙的Web服务器上（数百万个唯一IP），您可能希望禁用此图表（检查<a href="https://github.com/netdata/netdata/blob/master/collectors/python.d.plugin/web_log/web_log.conf" target="_blank"><code>/etc/netdata/python.d/web_log.conf</code></a>）。',
    },

    // ------------------------------------------------------------------------
    // web_log for squid

    "web_log.squid_response_statuses": {
        info:
            "Squid响应类型。" +
            "<code>success</code> 包括 <b>1xx</b>, <b>2xx</b>, <b>000</b>, <b>304</b>, " +
            "<code>error</code> 包括 <b>5xx</b> 和 <b>6xx</b>, " +
            "<code>redirect</code> 包括 <b>3xx</b> 除了 <b>304</b>, " +
            "<code>bad</code> 包括 <b>4xx</b>, " +
            "<code>other</code> 是所有其他响应。",
        mainheads: [
            function (os, id) {
                void os;
                return (
                    '<div data-netdata="' +
                    id +
                    '"' +
                    ' data-dimensions="success"' +
                    ' data-chart-library="gauge"' +
                    ' data-title="成功"' +
                    ' data-units="请求/秒"' +
                    ' data-gauge-adjust="width"' +
                    ' data-width="12%"' +
                    ' data-before="0"' +
                    ' data-after="-CHART_DURATION"' +
                    ' data-points="CHART_DURATION"' +
                    ' data-common-max="' +
                    id +
                    '"' +
                    ' data-colors="' +
                    NETDATA.colors[0] +
                    '"' +
                    ' data-decimal-digits="0"' +
                    ' role="application"></div>'
                );
            },

            function (os, id) {
                void os;
                return (
                    '<div data-netdata="' +
                    id +
                    '"' +
                    ' data-dimensions="redirect"' +
                    ' data-chart-library="gauge"' +
                    ' data-title="重定向"' +
                    ' data-units="请求/秒"' +
                    ' data-gauge-adjust="width"' +
                    ' data-width="12%"' +
                    ' data-before="0"' +
                    ' data-after="-CHART_DURATION"' +
                    ' data-points="CHART_DURATION"' +
                    ' data-common-max="' +
                    id +
                    '"' +
                    ' data-colors="' +
                    NETDATA.colors[2] +
                    '"' +
                    ' data-decimal-digits="0"' +
                    ' role="application"></div>'
                );
            },

            function (os, id) {
                void os;
                return (
                    '<div data-netdata="' +
                    id +
                    '"' +
                    ' data-dimensions="bad"' +
                    ' data-chart-library="gauge"' +
                    ' data-title="错误请求"' +
                    ' data-units="请求/秒"' +
                    ' data-gauge-adjust="width"' +
                    ' data-width="12%"' +
                    ' data-before="0"' +
                    ' data-after="-CHART_DURATION"' +
                    ' data-points="CHART_DURATION"' +
                    ' data-common-max="' +
                    id +
                    '"' +
                    ' data-colors="' +
                    NETDATA.colors[3] +
                    '"' +
                    ' data-decimal-digits="0"' +
                    ' role="application"></div>'
                );
            },

            function (os, id) {
                void os;
                return (
                    '<div data-netdata="' +
                    id +
                    '"' +
                    ' data-dimensions="error"' +
                    ' data-chart-library="gauge"' +
                    ' data-title="服务器错误"' +
                    ' data-units="请求/秒"' +
                    ' data-gauge-adjust="width"' +
                    ' data-width="12%"' +
                    ' data-before="0"' +
                    ' data-after="-CHART_DURATION"' +
                    ' data-points="CHART_DURATION"' +
                    ' data-common-max="' +
                    id +
                    '"' +
                    ' data-colors="' +
                    NETDATA.colors[1] +
                    '"' +
                    ' data-decimal-digits="0"' +
                    ' role="application"></div>'
                );
            },
        ],
    },

    "web_log.squid_response_codes": {
        info: '按代码族分类的Web服务器响应。根据HTTP标准，<code>1xx</code>是信息响应，<code>2xx</code>是成功响应，<code>3xx</code>是重定向（尽管其中包括<b>304</b>，用作“<b>未修改</b>”），<code>4xx</code>是错误请求，<code>5xx</code>是服务器内部错误。Squid还定义了<code>000</code>主要用于UDP请求，<code>6xx</code>用于发送错误标头的损坏上游服务器。最后，<code>other</code>是非标准响应，<code>unmatched</code>计算日志文件中未被插件匹配的行（<a href="https://github.com/netdata/netdata/issues/new?title=web_log%20reports%20unmatched%20lines&body=web_log%20plugin%20reports%20unmatched%20lines.%0A%0AThis%20is%20my%20log:%0A%0A%60%60%60txt%0A%0Aplease%20paste%20your%20web%20server%20log%20here%0A%0A%60%60%60" target="_blank">让我们知道</a>如果您有任何未匹配的情况）。',
    },

    "web_log.squid_duration": {
        mainheads: [
            function (os, id) {
                void os;
                return (
                    '<div data-netdata="' +
                    id +
                    '"' +
                    ' data-dimensions="avg"' +
                    ' data-chart-library="gauge"' +
                    ' data-title="平均响应时间"' +
                    ' data-units="毫秒"' +
                    ' data-gauge-adjust="width"' +
                    ' data-width="12%"' +
                    ' data-before="0"' +
                    ' data-after="-CHART_DURATION"' +
                    ' data-points="CHART_DURATION"' +
                    ' data-colors="' +
                    NETDATA.colors[4] +
                    '"' +
                    ' data-decimal-digits="2"' +
                    ' role="application"></div>'
                );
            },
        ],
    },

    "web_log.squid_detailed_response_codes": {
        info: "每个响应代码的响应次数。",
    },

    "web_log.squid_clients": {
        info: "访问Squid的唯一客户端IP，在每个数据收集迭代中。如果数据收集是<b>每秒</b>，则此图表显示<b>每秒的唯一客户端IP</b>。",
    },

    "web_log.squid_clients_all": {
        info: '自netdata上次重启以来访问Squid的唯一客户端IP。此插件在内存中保留了所有访问服务器的唯一IP。在非常繁忙的Squid服务器上（数百万个唯一IP），您可能希望禁用此图表（检查<a href="https://github.com/netdata/netdata/blob/master/collectors/python.d.plugin/web_log/web_log.conf" target="_blank"><code>/etc/netdata/python.d/web_log.conf</code></a>）。',
    },

    "web_log.squid_transport_methods": {
        info: "按交付方法细分：<code>TCP</code>是HTTP端口（通常为3128）上的请求，<code>UDP</code>是ICP端口（通常为3130）或HTCP端口（通常为4128）上的请求。如果使用log_icp_queries选项禁用了ICP日志记录，则不会记录任何ICP回复。<code>NONE</code>用于说明Squid提供了异常响应或根本没有响应。在cachemgr请求和错误中看到，通常是在事务在被分类为上述结果之前失败时。也可在对<code>CONNECT</code>请求的响应中看到。",
    },

    "web_log.squid_code": {
        info:
            "这些是组合的Squid结果状态代码。下面的图表给出了每个组件的细分。" +
            '请查看<a href="http://wiki.squid-cache.org/SquidFaq/SquidLogs">有关它们的Squid文档</a>。',
    },

    "web_log.squid_handling_opts": {
        info:
            "这些标签是可选的，描述了为什么执行特定处理或请求来自何处。" +
            "<code>CLIENT</code>表示客户端请求对响应产生影响。通常与客户端发出的<b>no-cache</b>或类似的缓存控制命令一起看到。因此，缓存必须验证对象。" +
            "<code>IMS</code>表示客户端发送了重新验证（有条件的）请求。" +
            "<code>ASYNC</code>用于Squid内部生成的请求。通常用于缓存信息交换的后台获取，来自stale-while-revalidate缓存控制的后台重新验证，或正在加载的ESI子对象。" +
            "<code>SWAPFAIL</code>在认为对象在缓存中但无法访问时分配。从服务器请求了一个新副本。" +
            "<code>REFRESH</code>表示向服务器发送了重新验证（有条件的）请求。" +
            "<code>SHARED</code>表示此请求与现有事务合并，通过折叠转发。注意：现有请求不标记为SHARED。" +
            "<code>REPLY</code>表示特定处理是从服务器或对等方的HTTP回复中请求的。通常在由于http_reply_access ACL阻止将服务器响应对象传递给客户端而导致DENIED时看到。",
    },

    "web_log.squid_object_types": {
        info:
            "这些标签是可选的，描述了生成的对象类型。" +
            "<code>NEGATIVE</code>仅在HIT响应中看到，表示响应是缓存的错误响应。例如<b>404 not found</b>。" +
            "<code>STALE</code>表示对象已缓存并提供了过期的服务。这通常是由于stale-while-revalidate或stale-if-error缓存控制引起的。" +
            "<code>OFFLINE</code>表示在offline_mode期间从缓存中检索到请求的对象。离线模式永远不会验证任何对象。" +
            "<code>INVALID</code>表示收到了无效请求。提供了指示问题所在的错误响应。" +
            "<code>FAIL</code>仅在<code>REFRESH</code>上看到，表示重新验证请求失败。响应对象可能是服务器提供的网络错误，也可能是正在重新验证的过期对象，具体取决于stale-if-error缓存控制。" +
            "<code>MODIFIED</code>仅在<code>REFRESH</code>响应中看到，表示重新验证产生了新的修改对象。" +
            "<code>UNMODIFIED</code>仅在<code>REFRESH</code>响应中看到，表示重新验证产生了<b>304</b>（未修改）状态，该状态被中继给客户端。" +
            "<code>REDIRECT</code>表示Squid生成了HTTP重定向响应以响应此请求。",
    },

    "web_log.squid_cache_events": {
        info:
            "这些标签是可选的，描述了响应是从缓存、网络或其他位置加载的。" +
            "<code>HIT</code>表示交付的响应对象是本地缓存对象。" +
            "<code>MEM</code>表示响应对象来自内存缓存，避免了磁盘访问。仅在HIT响应中看到。" +
            "<code>MISS</code>表示交付的响应对象是网络响应对象。" +
            "<code>DENIED</code>表示请求被访问控制拒绝。" +
            "<code>NOFETCH</code>是ICP特定类型，表示服务是活动的，但不适用于此请求（在“-Y”启动期间发送，或在频繁失败期间，仅处于命中模式的缓存将返回UDP_HIT或UDP_MISS_NOFETCH。因此，邻居只会获取命中）。" +
            "<code>TUNNEL</code>表示为此事务建立了二进制隧道。",
    },

    "web_log.squid_transport_errors": {
        info:
            "这些标签是可选的，描述了在响应交付期间发生的某些错误条件（如果有）。" +
            "<code>ABORTED</code>表示由于连接被中止（通常是由客户端）而未完成响应。" +
            "<code>TIMEOUT</code>表示由于连接超时而未完成响应。",
    },

    // ------------------------------------------------------------------------
    // Fronius Solar Power

    "fronius.power": {
        info:
            "正值<code>Grid</code>表示来自电网的电力。负值表示超额的电力正在返回电网，可能会出售。" +
            "<code>Photovoltaics</code>是从太阳能电池板产生的电力。" +
            "<code>Accumulator</code>是蓄电池中存储的电力，如果存在的话。",
    },

    "fronius.autonomy": {
        commonMin: true,
        commonMax: true,
        valueRange: "[0, 100]",
        info:
            "<code>Autonomy</code>是安装的自主性百分比。100%的自主性意味着安装产生的能量超过所需能量。" +
            "<code>Self consumption</code>表示当前产生的电力与当前负载之间的比率。当达到100%时，<code>Autonomy</code>会下降，因为太阳能电池板无法产生足够的能量，需要从电网获取支持。",
    },

    "fronius.energy.today": {
        commonMin: true,
        commonMax: true,
        valueRange: "[0, null]",
    },

    // ------------------------------------------------------------------------
    // Stiebel Eltron Heat pump installation

    "stiebeleltron.system.roomtemp": {
        commonMin: true,
        commonMax: true,
        valueRange: "[0, null]",
    },

    // ------------------------------------------------------------------------
    // Port check

    "portcheck.latency": {
        info:
            "<code>latency</code>描述连接到TCP端口所花费的时间。没有发送或接收数据。" +
            "目前，延迟的准确性较低，仅应用于参考。",
    },

    "portcheck.status": {
        valueRange: "[0, 1]",
        info:
            "<code>status</code>图表验证服务的可用性。" +
            "如果触发，每个状态维度的值将为<code>1</code>。仅当连接成功时，维度<code>success</code>的值才为<code>1</code>。" +
            "此图表对于警报和第三方应用程序最有用。",
    },

    // ------------------------------------------------------------------------

    "chrony.system": {
        info: "在正常操作中，chronyd永远不会调整系统时钟，因为时间尺度的任何跳跃都可能对某些应用程序产生不利影响。相反，系统时钟的任何错误都将通过轻微加快或减慢系统时钟来纠正，直到错误被消除，然后返回到系统时钟的正常速度。由此产生的一个结果是，在一段时间内，系统时钟（由使用<code>gettimeofday()</code>系统调用或shell中的<code>date</code>命令读取的）将与chronyd对当前真实时间的估计（在服务器模式下向NTP客户端报告）不同。此行报告的值是由于这种效应造成的差异。",
        colors: NETDATA.colors[3],
    },

    "chrony.offsets": {
        info: "<code>last offset</code>是上次时钟更新时的估计本地偏移量。<code>RMS offset</code>是偏移值的长期平均值。",
        height: 0.5,
    },

    "chrony.stratum": {
        info: "<code>stratum</code>指示我们距离具有附加参考时钟的计算机有多少跳。这样的计算机是stratum-1计算机。",
        decimalDigits: 0,
        height: 0.5,
    },

    "chrony.root": {
        info: "该系统与根时间服务器的估计延迟。 <code>delay</code>是到最终与stratum-1计算机同步的计算机的网络路径延迟总和。<code>dispersion</code>是通过所有计算机返回到最终与stratum-1计算机同步的计算机的总离散度。离散度是由于系统时钟分辨率、统计测量变化等造成的。",
    },

    "chrony.frequency": {
        info: "<code>frequency</code>是如果chronyd不进行校正，系统时钟将出现的错误速率。它以ppm（百万分之一）表示。例如，1ppm的值意味着当系统时钟认为它已经提前了1秒时，相对于真实时间，它实际上提前了1.000001秒。",
        colors: NETDATA.colors[0],
    },

    "chrony.residualfreq": {
        info:
            "这显示了当前选择的参考源的<code>残余频率</code>。" +
            "它反映了来自参考源的测量所指示的频率与当前使用的频率之间的任何差异。之所以不总是为零，是因为对频率应用了平滑过程。每当从参考源获得测量并计算新的残余频率时，将估计此残余的准确性（参见<code>skew</code>）与现有频率值的估计准确性进行比较。对新频率进行加权平均，权重取决于这些准确性。如果来自参考源的测量遵循一致的趋势，残余将随时间被驱动为零。",
        height: 0.5,
        colors: NETDATA.colors[3],
    },

    "chrony.skew": {
        info: "频率的估计误差边界。",
        height: 0.5,
        colors: NETDATA.colors[5],
    },

    "couchdb.active_tasks": {
        info: "在此CouchDB <b>集群</b>上运行的活动任务。当前存在四种类型的任务：索引器（视图构建）、复制、数据库压缩和视图压缩。",
    },

    "couchdb.replicator_jobs": {
        info: '正在进行的任何复制作业的详细分解。有关更多信息，请参阅<a href="http://docs.couchdb.org/en/latest/replication/replicator.html">复制器文档</a>。',
    },

    "couchdb.open_files": {
        info: 'CouchDB持有的所有文件的打开计数。如果此值似乎固定在1024或4096，则您的服务器进程可能已达到打开文件句柄限制，<a href="http://docs.couchdb.org/en/latest/maintenance/performance.html#pam-and-ulimit">需要增加。</a>',
    },

    "btrfs.disk": {
        info: "BTRFS的物理磁盘使用情况。此处报告的磁盘空间是分配给BTRFS卷的原始物理磁盘空间（即<b>在任何RAID级别之前</b>）。BTRFS使用两阶段分配器，首先为一种类型的块（数据、元数据或系统）分配大区域的磁盘空间，然后在这些区域内部使用常规块分配器。 <code>未分配</code>是尚未分配的物理磁盘空间，可按需用于成为数据、元数据或系统。当<code>未分配</code>为零时，所有可用磁盘空间已分配给特定功能。健康的卷理想情况下应至少有总空间的五分之一<code>未分配</code>。您可以通过定期运行<code>btrfs balance</code>命令来保持卷的健康状态（查看<code>man btrfs-balance</code>获取更多信息）。 请注意，列为<code>未分配</code>的一些空间实际上可能无法使用，如果卷使用不同大小的设备。",
        colors: [NETDATA.colors[12]],
    },

    "btrfs.data": {
        info: "BTRFS数据的逻辑磁盘使用情况。数据块用于存储实际文件数据（文件内容）。此处报告的磁盘空间是可用分配（即在任何条带化或复制之后）。健康的卷理想情况下在此处持续报告的自由空间不应超过几GB。运行<code>btrfs balance</code>可以在这里有所帮助。",
    },

    "btrfs.metadata": {
        info: "BTRFS元数据的逻辑磁盘使用情况。元数据块存储大部分文件系统内部结构，以及诸如目录结构和文件名之类的信息。此处报告的磁盘空间是可用分配（即在任何条带化或复制之后）。健康的卷理想情况下在此处持续报告的自由空间不应超过几GB。运行<code>btrfs balance</code>可以在这里有所帮助。",
    },

    "btrfs.system": {
        info: "BTRFS系统的逻辑磁盘使用情况。系统块存储有关其他块分配的信息。此处报告的磁盘空间是可用分配（即在任何条带化或复制之后）。此处报告的值应相对于数据和元数据而言相对较小，并且将随卷大小和整体空间使用量而缩放。",
    },

    // ------------------------------------------------------------------------
    // RabbitMQ

    // info: the text above the charts
    // heads: the representation of the chart at the top the subsection (second level menu)
    // mainheads: the representation of the chart at the top of the section (first level menu)
    // colors: the dimension colors of the chart (the default colors are appended)
    // height: the ratio of the chart height relative to the default

    "rabbitmq.queued_messages": {
        info: "准备就绪和未确认排队消息的总体总数。此处不计算立即传递的消息。",
    },

    "rabbitmq.message_rates": {
        info: "包括确认、传递、重新传递和发布在内的总体消息速率。",
    },

    "rabbitmq.global_counts": {
        info: "通道、消费者、连接、队列和交换的总体总数。",
    },

    "rabbitmq.file_descriptors": {
        info: '已使用的文件描述符总数。有关详细信息，请参阅<code><a href="https://www.rabbitmq.com/production-checklist.html#resource-limits-file-handle-limit" target="_blank">打开文件限制</a></code>。',
        colors: NETDATA.colors[3],
    },

    "rabbitmq.sockets": {
        info: '已使用的套接字描述符总数。每个已使用的套接字也计为一个已使用的文件描述符。有关详细信息，请参阅<code><a href="https://www.rabbitmq.com/production-checklist.html#resource-limits-file-handle-limit" target="_blank">打开文件限制</a></code>。',
        colors: NETDATA.colors[3],
    },

    "rabbitmq.processes": {
        info: "Erlang VM内运行的进程总数。这与主机上运行的进程数量不同。",
        colors: NETDATA.colors[3],
    },

    "rabbitmq.erlang_run_queue": {
        info: "Erlang调度器排队运行的Erlang进程数量。",
        colors: NETDATA.colors[3],
    },

    "rabbitmq.memory": {
        info: 'RabbitMQ使用的总内存量。这是一个复杂的统计数据，可以在管理UI中进一步分析。有关详细信息，请参阅<a href="https://www.rabbitmq.com/production-checklist.html#resource-limits-ram" target="_blank">内存</a>。',
        colors: NETDATA.colors[3],
    },

    "rabbitmq.disk_space": {
        info: '消息存储消耗的总磁盘空间量。有关详细信息，请参阅<code><a href="https://www.rabbitmq.com/production-checklist.html#resource-limits-disk-space" target=_"blank">磁盘空间限制</a></code>。',
        colors: NETDATA.colors[3],
    },

    // ------------------------------------------------------------------------
    // ntpd

    "ntpd.sys_offset": {
        info: "对于没有任何时间关键服务的主机，即使网络延迟很高，偏移量&lt; 100毫秒也应该是可以接受的。对于具有时间关键服务的主机，通过使用延迟较低的对等体和配置最佳的<b>轮询指数</b>值，可以实现大约0.01毫秒或更低的偏移量。",
        colors: NETDATA.colors[4],
    },

    "ntpd.sys_jitter": {
        info: "抖动统计数据是指数加权的RMS平均值。系统抖动在NTPv4规范中定义；时钟抖动统计数据由时钟调节模块计算。",
    },

    "ntpd.sys_frequency": {
        info: "频率偏移以ppm（百万分之一）相对于系统频率显示。时钟所需的频率校正可能会因引导之间的显著差异以及温度或辐射等外部影响而显著变化。",
        colors: NETDATA.colors[2],
        height: 0.6,
    },

    "ntpd.sys_wander": {
        info: "漫游统计数据是指数加权的RMS平均值。",
        colors: NETDATA.colors[3],
        height: 0.6,
    },

    "ntpd.sys_rootdelay": {
        info: "rootdelay是到主参考时钟的往返延迟，类似于<code>ping</code>命令显示的延迟。较低的延迟应导致较低的时钟偏移。",
        colors: NETDATA.colors[1],
    },

    "ntpd.sys_stratum": {
        info: "到主参考时钟的“跳数”距离",
        colors: NETDATA.colors[5],
        height: 0.3,
    },

    "ntpd.sys_tc": {
        info: '时间常数和轮询间隔表示为2的指数。默认的轮询指数为6对应于64秒的轮询间隔。对于典型的互联网路径，最佳的轮询间隔约为64秒。对于具有现代计算机的快速局域网，轮询指数为4（16秒）是合适的。 <a href="http://doc.ntp.org/current-stable/poll.html">轮询过程</a>根据时钟调节算法确定间隔发送NTP数据包。',
        height: 0.5,
    },

    "ntpd.sys_precision": {
        colors: NETDATA.colors[6],
        height: 0.2,
    },

    "ntpd.peer_offset": {
        info: "对等时钟相对于系统时钟的偏移量（毫秒）。这里的较小值在初始同步后对对等体的选择权重更大。对于向其他系统提供时间服务的系统，这些值应尽可能低。",
    },

    "ntpd.peer_delay": {
        info: "与对等体通信的往返时间（RTT），类似于<code>ping</code>命令显示的延迟。不像偏移或抖动那样关键，但仍然纳入选择算法中（因为通常来说，较低的延迟意味着更准确的时间）。在大多数情况下，它应该低于100毫秒。",
    },

    "ntpd.peer_dispersion": {
        info: "这是对等体和本地系统之间估计误差的度量。这里的较低值更好。",
    },

    "ntpd.peer_jitter": {
        info: "这本质上是对对等体的<code>system_jitter</code>值的远程估计。这里的较低值在对等体选择中权重更大，这是给定时间服务器整体质量的良好指标（良好的服务器在这里的值不超过单个数字毫秒，具有高质量的stratum one服务器通常具有亚毫秒抖动）。",
    },

    "ntpd.peer_xleave": {
        info: '此变量用于交错模式（仅用于NTP对称和广播模式）。请参阅<a href="http://doc.ntp.org/current-stable/xleave.html">NTP交错模式</a>。',
    },

    "ntpd.peer_rootdelay": {
        info: "对于stratum 1服务器，这是参考时钟的访问延迟。对于较低的stratum服务器，它是系统同步的<code>peer_delay</code>和<code>peer_rootdelay</code>的总和。与<code>peer_delay</code>类似，这里的较低值在技术上更好，但在对等体选择中的影响有限。",
    },

    "ntpd.peer_rootdisp": {
        info: "与<code>peer_rootdelay</code>相同，但测量的是累积<code>peer_dispersion</code>而不是累积<code>peer_delay</code>。",
    },

    "ntpd.peer_hmode": {
        info: "<code>peer_hmode</code>和<code>peer_pmode</code>变量提供了关于发送到给定对等体和从给定对等体接收的数据包的模式的信息。模式1是对称主动（本地系统和远程对等体在<code>/etc/ntp.conf</code>中相互声明为对等体），模式2是对称被动（只有一方将另一方声明为对等体），模式3是客户端，模式4是服务器，模式5是广播（也用于多播和多播操作）。",
        height: 0.2,
    },

    "ntpd.peer_pmode": {
        height: 0.2,
    },

    "ntpd.peer_hpoll": {
        info: "<code>peer_hpoll</code>和<code>peer_ppoll</code>变量是以秒为单位的轮询间隔的log2表示。",
        height: 0.5,
    },

    "ntpd.peer_ppoll": {
        height: 0.5,
    },

    "ntpd.peer_precision": {
        height: 0.2,
    },

    "spigotmc.tps": {
        info: "服务器每秒运行的1、5和15分钟平均刻度数。理想情况下，所有值都应为20.0，但实际上几乎从不会发生。典型的服务器应该在这里显示大约19.98-20.0。较低的值表示越来越多的服务器端延迟（因此您需要更好的服务器硬件或更低的用户限制）。每低于20的0.05个刻度，红石时钟将滞后约0.25%。大约低于19.50的值可能会干扰复杂的自由运行红石电路，并且会明显减慢增长速度。",
    },

    "spigotmc.users": {
        info: "受监视的Spigot服务器上当前连接用户的数量。",
    },

    "boinc.tasks": {
        info: "任务的总数和活动任务的数量。活动任务是当前正在处理的任务，或者部分处理但被暂停的任务。",
    },

    "boinc.states": {
        info: "每个任务状态中的任务计数。正常状态序列是<code>New</code>、<code>Downloading</code>、<code>Ready to Run</code>、<code>Uploading</code>、<code>Uploaded</code>。标记为<code>Ready to Run</code>的任务可能正在积极运行，也可能正在等待调度。计算错误是在执行过程中由于某种原因失败的任务。<code>Aborted</code>任务是手动取消的，不会被处理。失败的上传是已经完成但未能上传到服务器的任务，通常表示网络问题。",
    },

    "boinc.sched": {
        info: "每个调度状态中的活动任务计数。如果系统允许处理任务，则<code>Scheduled</code>任务将运行。如果<code>Scheduled</code>任务由于某种原因停止运行，<code>Preempted</code>任务将处于待机状态。<code>Uninitialized</code>任务不应该存在，并且表示调度程序尚未尝试调度它们。",
    },

    "boinc.process": {
        info: "每个进程状态中的活动任务计数。<code>Executing</code>任务当前正在运行。<code>Suspended</code>任务有一个关联的进程，但当前未运行（要么是因为系统当前没有处理任何任务，要么是因为它们已被更高优先级的任务抢占）。<code>Quit</code>任务正在正常退出。<code>Aborted</code>任务超出了某些资源限制，并正在被关闭。<code>Copy Pending</code>任务正在等待后台文件传输完成。<code>Uninitialized</code>任务尚未有关联的进程。",
    },

    "w1sensor.temp": {
        info: "从1-Wire温度传感器派生的温度。",
    },

    "logind.sessions": {
        info: "显示logind跟踪的每种类型的活动会话数量。",
    },

    "logind.users": {
        info: "显示logind跟踪的每种类型的活动用户数量。",
    },

    "logind.seats": {
        info: "显示logind跟踪的活动座位数量。每个座位对应于为系统提供物理存在的显示设备和输入设备的组合。",
    },

    // ------------------------------------------------------------------------
    // ProxySQL

    "proxysql.pool_status": {
        info:
            "后端服务器的状态。" +
            "<code>1=ONLINE</code> 后端服务器完全可操作，" +
            "<code>2=SHUNNED</code> 后端服务器因连接错误次数过多或复制延迟超过允许的阈值而被暂时停用，" +
            "<code>3=OFFLINE_SOFT</code> 当服务器处于OFFLINE_SOFT模式时，不再接受新的传入连接，而现有连接会保持，直到它们变得不活动。换句话说，连接会保持使用，直到当前事务完成。这允许优雅地分离后端，" +
            "<code>4=OFFLINE_HARD</code> 当服务器处于OFFLINE_HARD模式时，现有连接会被断开，而新的传入连接也不会被接受。这相当于从主机组中删除服务器，或者将其暂时从主机组中移出以进行维护工作，" +
            "<code>-1</code> 未知状态。",
    },

    "proxysql.pool_net": {
        info:
            "发送到/从后端的数据量" +
            "（这不包括元数据（数据包的标头、OK/ERR数据包、字段描述等）。",
    },

    "proxysql.pool_overall_net": {
        info:
            "发送到/从所有后端的数据量" +
            "（这不包括元数据（数据包的标头、OK/ERR数据包、字段描述等）。",
    },

    "proxysql.questions": {
        info:
            "<code>questions</code>从前端发送的查询总数，" +
            "<code>slow_queries</code>运行时间超过全局变量<code>mysql-long_query_time</code>中定义的毫秒阈值的查询数量。",
    },

    "proxysql.connections": {
        info:
            "<code>aborted</code>由于无效凭据或达到最大连接数而中止的前端连接数，" +
            "<code>connected</code>当前连接的前端连接数，" +
            "<code>created</code>创建的前端连接数，" +
            "<code>non_idle</code>当前未处于空闲状态的前端连接数。",
    },

    "proxysql.pool_latency": {
        info: "当前以微秒为单位报告的ping时间，来自监视器。",
    },

    "proxysql.queries": {
        info: "路由到该特定后端服务器的查询数量。",
    },

    "proxysql.pool_used_connections": {
        info: "ProxySQL当前用于向后端服务器发送查询的连接数。",
    },

    "proxysql.pool_free_connections": {
        info: "当前空闲的连接数。它们保持打开状态，以最小化向后端服务器发送查询的时间成本。",
    },

    "proxysql.pool_ok_connections": {
        info: "成功建立的连接数。",
    },

    "proxysql.pool_error_connections": {
        info: "未成功建立的连接数。",
    },

    "proxysql.commands_count": {
        info: "执行该类型命令的总数",
    },

    "proxysql.commands_duration": {
        info: "执行该类型命令所花费的总时间，以毫秒为单位",
    },

    "powersupply.capacity": {
        info: undefined,
    },

    "powersupply.charge": {
        info: undefined,
    },

    "powersupply.energy": {
        info: undefined,
    },

    "powersupply.voltage": {
        info: undefined,
    },

    "vsphere.host_mem_usage_percentage": {
        info: "已使用机器内存的百分比：<code>consumed</code> / <code>machine-memory-size</code>。",
    },

    "vsphere.host_mem_usage": {
        info:
            "<code>granted</code>是为主机映射的机器内存量，它等于所有已启动虚拟机的所有授予指标的总和，加上主机上vSphere服务的机器内存。" +
            "<code>consumed</code>是主机上使用的机器内存量，包括服务控制台、VMkernel、vSphere服务使用的内存，以及所有运行虚拟机的总消耗指标。" +
            "<code>consumed</code> = <code>total host memory</code> - <code>free host memory</code>。" +
            "<code>active</code>是所有已启动虚拟机和主机上vSphere服务（如COS、vpxa）的所有活动指标的总和。" +
            "<code>shared</code>是所有已启动虚拟机的所有共享指标的总和，加上主机上vSphere服务的数量。" +
            "<code>sharedcommon</code>是所有已启动虚拟机和主机上vSphere服务共享的机器内存量。" +
            "<code>shared</code> - <code>sharedcommon</code> = 机器内存（主机内存）节省（KB）。" +
            '详细信息请参阅<a href="https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.resmgmt.doc/GUID-BFDC988B-F53D-4E97-9793-A002445AFAE1.html">测量和区分内存使用类型</a>和' +
            '<a href="https://www.vmware.com/support/developer/converter-sdk/conv51_apireference/memory_counters.html">内存计数器</a>文章。',
    },

    "vsphere.host_mem_swap_rate": {
        info:
            "此统计数据是指VMkernel交换，而不是客户操作系统交换。" +
            "<code>in</code>是主机上所有已启动虚拟机的<code>swapinRate</code>值的总和。" +
            "<code>swapinRate</code>是VMKernel从交换文件读取数据到机器内存的速率。" +
            "<code>out</code>是主机上所有已启动虚拟机的<code>swapoutRate</code>值的总和。" +
            "<code>swapoutRate</code>是VMkernel从机器内存写入虚拟机交换文件的速率。",
    },

    "vsphere.vm_mem_usage_percentage": {
        info: "已使用虚拟机“物理”内存的百分比：<code>actvive</code> / <code>virtual machine configured size</code>。",
    },

    "vsphere.vm_mem_usage": {
        info:
            "<code>granted</code>是映射到机器内存的客户“物理”内存量，其中包括<code>shared</code>内存量。" +
            "<code>consumed</code>是虚拟机用于客户内存的“物理”内存量，" +
            "<code>consumed</code> = <code>granted</code> - <code>memory saved due to memory sharing</code>。" +
            "<code>active</code>是根据VMkernel根据最近访问的内存页面估算的活动内存量。" +
            "<code>shared</code>是与其他虚拟机共享的客户“物理”内存量（通过VMkernel的透明页面共享机制，一种RAM去重技术）。" +
            '详细信息请参阅<a href="https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.resmgmt.doc/GUID-BFDC988B-F53D-4E97-9793-A002445AFAE1.html">测量和区分内存使用类型</a>和' +
            '<a href="https://www.vmware.com/support/developer/converter-sdk/conv51_apireference/memory_counters.html">内存计数器</a>文章。',
    },

    "vsphere.vm_mem_swap_rate": {
        info:
            "此统计数据是指VMkernel交换，而不是指客户操作系统的交换。" +
            "<code>in</code> 是VMKernel从交换文件将数据读入机器内存的速率。" +
            "<code>out</code> 是VMkernel从机器内存向虚拟机的交换文件写入的速率。",
    },

    "vsphere.vm_mem_swap": {
        info:
            "此统计数据是指VMkernel交换，而不是指客户操作系统的交换。" +
            "<code>swapped</code> 是由VMkernel交换到虚拟机交换文件的客户物理内存的数量。" +
            "交换的内存会一直保留在磁盘上，直到虚拟机需要它。",
    },

    // Common
    "vsphere.cpu_usage_total": {
        info: "所有CPU/核心的总体CPU使用率统计数据。",
    },

    "vsphere.net_bandwidth_total": {
        info: "所有网络接口的接收/发送统计数据总结。",
    },

    "vsphere.net_packets_total": {
        info: "所有网络接口的接收/发送统计数据总结。",
    },

    "vsphere.net_errors_total": {
        info: "所有网络接口的接收/发送统计数据总结。",
    },

    "vsphere.net_drops_total": {
        info: "所有网络接口的接收/发送统计数据总结。",
    },

    "vsphere.disk_usage_total": {
        info: "所有磁盘的读取/写入统计数据总结。",
    },

    "vsphere.disk_max_latency": {
        info: "<code>latency</code> 是所有磁盘中最高的延迟值。",
    },

    "vsphere.overall_status": {
        info: "<code>0</code> 表示未知，<code>1</code> 表示正常，<code>2</code> 表示可能存在问题，<code>3</code> 表示肯定存在问题。",
    },

    // ------------------------------------------------------------------------
    // VCSA
    "vcsa.system_health": {
        info:
            "<code>-1</code>: 未知; " +
            "<code>0</code>: 所有组件正常; " +
            "<code>1</code>: 一个或多个组件可能很快变得过载; " +
            "<code>2</code>: 虚拟应用程序中的一个或多个组件可能已经降级; " +
            "<code>3</code>: 一个或多个组件可能处于不可用状态，虚拟应用程序可能很快变得无响应; " +
            "<code>4</code>: 没有可用的健康数据。",
    },

    "vcsa.components_health": {
        info:
            "<code>-1</code>: 未知; " +
            "<code>0</code>: 正常; " +
            "<code>1</code>: 健康，但可能存在一些问题; " +
            "<code>2</code>: 降级，并可能存在严重问题; " +
            "<code>3</code>: 不可用，或将很快停止运行; " +
            "<code>4</code>: 没有可用的健康数据。",
    },

    "vcsa.software_updates_health": {
        info:
            "<code>softwarepackages</code> 表示远程 vSphere Update Manager 存储库中可用软件更新的信息。<br>" +
            "<code>-1</code>: 未知; " +
            "<code>0</code>: 没有可用的更新; " +
            "<code>2</code>: 可用非安全更新; " +
            "<code>3</code>: 可用安全更新; " +
            "<code>4</code>: 检索软件更新信息时出错。",
    },

    // ------------------------------------------------------------------------
    // Zookeeper

    "zookeeper.server_state": {
        info:
            "<code>0</code>: 未知, " +
            "<code>1</code>: 领导者, " +
            "<code>2</code>: 跟随者, " +
            "<code>3</code>: 观察者, " +
            "<code>4</code>: 独立节点。",
    },
};
