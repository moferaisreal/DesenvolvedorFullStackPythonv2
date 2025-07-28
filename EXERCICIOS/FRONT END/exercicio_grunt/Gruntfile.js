module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    // Tarefa para concatenar (juntar) arquivos JavaScript
    concat: {
      options: {
        separator: ";\n",
      },
      dist: {
        src: ["src/js/libs.js", "src/js/script.js"],
        dest: "dist/js/script.js",
      },
    },
    // Tarefa para "uglificar" (minificar) o JavaScript
    uglify: {
      options: {
        banner:
          '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
      },
      dist: {
        files: {
          "dist/js/script.min.js": ["<%= concat.dist.dest %>"],
        },
      },
    },
    // Tarefa para compilar LESS para CSS
    less: {
      development: {
        files: {
          "dev/style/style.css": "src/less/style.less",
        },
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          "dist/css/style.css": "src/less/style.less",
        },
      },
    },
    // Tarefa para minificar o CSS
    cssmin: {
      options: {
        banner:
          '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
      },
      target: {
        files: {
          "dist/css/style.min.css": ["dist/css/style.css"],
        },
      },
    },
    // Tarefa para monitorar alterações nos arquivos
    watch: {
      less: {
        files: ["src/less/**/*.less"],
        tasks: ["less:development"],
      },
      html: {
        files: ["src/index.html"],
        tasks: ["replace:dev"],
      },
      js: {
        files: ["src/js/**/*.js"],
        tasks: ["concat", "uglify:dist"],
      },
    },
    //Tarefa para substituir
    replace: {
      dev: {
        options: {
          patterns: [
            {
              match: "CSSFILE",
              replacement: "./css/style.css",
            },
            {
              match: "JSFILE",
              replacement: "./js/script.js",
            },
          ],
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ["src/index.html"],
            dest: "dev/",
          },
        ],
      },
      dist: {
        options: {
          patterns: [
            {
              match: "CSSFILE",
              replacement: "./css/style.min.css",
            },
            {
              match: "JSFILE",
              replacement: "./js/script.min.js",
            },
          ],
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ["src/index.html"],
            dest: "dist/",
          },
        ],
      },
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
        },
        files: {
          "dist/index.html": "dist/index.html",
        },
      },
    },
    //Tarefa de limpar a prebuild
    clean: ["dist", "dev"],
  });
  // Carregando os plugins necessários
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-replace");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");

  //tarefas
  grunt.registerTask("default", ["watch"]);

  grunt.registerTask("build", [
    "clean",
    "concat",
    "uglify:dist",
    "less:production",
    "cssmin",
    "replace:dist",
    "htmlmin:dist",
  ]);
};
