# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "centos/7"
  config.vm.define "elastic" do |elastic|
    elastic.vm.hostname = "elastic"
    elastic.vm.network "private_network", ip: "192.168.1.200"

    elastic.vm.provision "ansible" do |ansible|
      ansible.playbook = "install_elastic.yml"
    end

    elastic.vm.provider "virtualbox" do |vbox|
      vbox.memory = 2048
    end
  end
  config.vm.define "filebeat" do |filebeat|
    filebeat.vm.hostname = "filebeat"
    filebeat.vm.network "private_network", ip: "192.168.1.201"
    
    filebeat.vm.provision "ansible" do |ansible|
      ansible.playbook = "install_filebeat.yml"
    end
  end
end
