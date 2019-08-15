# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "centos/7"
  config.vm.define "elasticsearch1" do |elastic1|
    elastic1.vm.hostname = "elasticsearch1"
    elastic1.vm.network "private_network", ip: "192.168.1.201"

    elastic1.vm.provider "virtualbox" do |vbox|
      vbox.memory = 2048
    end
  end
  config.vm.define "elasticsearch2" do |elastic2|
    elastic2.vm.hostname = "elasticsearch2"
    elastic2.vm.network "private_network", ip: "192.168.1.202"

    elastic2.vm.provider "virtualbox" do |vbox|
      vbox.memory = 2048
    end
  end
  config.vm.define "dashboard" do |dashboard|
    dashboard.vm.hostname = "dashboard"
    dashboard.vm.network "private_network", ip: "192.168.1.200"

    dashboard.vm.provider "virtualbox" do |vbox|
      vbox.memory = 1024
    end
  end

  config.vm.define "demo1" do |demo|
    demo.vm.hostname = "demo1"
    demo.vm.network "private_network", ip: "192.168.1.101"
    
    demo.vm.provider "virtualbox" do |vbox|
      vbox.memory = 2048
    end
  end
end
